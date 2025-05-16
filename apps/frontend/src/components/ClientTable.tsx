'use client';
import { Client } from '@/types/client';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import {
  HeaderRow,
  HeaderCell,
  BodyRow,
  BodyCell,
  BalanceCell,
  ActionStack,
  ActionButton,
  StyledPaper,
} from '../styles/ClientTable.styles';
import Typography from '@mui/material/Typography';
import { BUTTON_LABELS, NO_CLIENTS_FOUND, CLIENTS_TABLE_HEADER } from '../constants/Constants';
import { formatBalance } from '../utils/formatBalance';
import { useState } from 'react';
import ClientAlert from './ClientAlert';

export interface ClientTableProps {
  readonly data?: Client[];
}

export default function ClientTable({ data }: ClientTableProps) {
  const [clients, setClients] = useState<Client[]>(data ?? []);
  const [alert, setAlert] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
  const [open, setOpen] = useState(false);

  const handleDelete = async (id: number) => {
    const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8080';
    try {
      const res = await fetch(`${BACKEND_URL}/clients/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete client');
      setClients(prev => prev.filter(c => c.id !== id));
      setAlert({ type: 'success', message: 'Client deleted.' });
    } catch {
      setAlert({ type: 'error', message: 'Failed to close account.' });
    }
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') return;
    setOpen(false);
  };

  if (!data) return null;
  
  return (
    <StyledPaper>
      {clients.length === 0 ? (
        <p style={{padding: '12px', verticalAlign: 'center', fontSize: '18px', color: 'black' }}>
          {NO_CLIENTS_FOUND}
        </p>
      ) : (
        <>
          <ClientAlert open={open} alert={alert} onClose={handleClose} />
          <TableContainer sx={{ borderCollapse: 'collapse' }}>
            <Table sx={{  borderCollapse: 'collapse',tableLayout: 'fixed', width: 'auto' }}>
              <TableHead>
                <HeaderRow>
                  {CLIENTS_TABLE_HEADER.map(({ label, align, width, padding }) => (
                    <HeaderCell
                      key={label}
                      align={align}
                      sx={{
                        width,
                        ...(padding && { padding }),
                      }}
                    >
                      {label}
                    </HeaderCell>
                  ))}
                </HeaderRow>
              </TableHead>
              <TableBody>
                {clients.map((c) => (
                  <BodyRow key={c.id} hover>
                    <BodyCell align="left">{c.name}</BodyCell>
                    <BodyCell align="center">
                      {new Date(c.birthday).toLocaleDateString('en', {
                        month: '2-digit',
                        day: '2-digit',
                        year: 'numeric',
                        timeZone: 'UTC'
                      }).replace(/\//g, ' / ')}
                    </BodyCell>
                    <BodyCell align="center">{c.accountType}</BodyCell>
                    <BodyCell align="left" sx={{ paddingLeft: '30px' }} >{c.accountNumber}</BodyCell>
                    <BalanceCell align="left" sx={{ paddingLeft: '15px' }}>
                      {formatBalance(c.balance, c.currency)}
                    </BalanceCell>
                    <BodyCell align="center" sx={{ paddingRight: '40px' }} >
                      <ActionStack direction="row" spacing={'6px'} alignItems="center" justifyContent="center">
                        <ActionButton>
                          {BUTTON_LABELS.DETAILS}
                        </ActionButton>
                        <Typography component="span">|</Typography>
                        <ActionButton>
                          {BUTTON_LABELS.TRANSFER}
                        </ActionButton>
                        <Typography component="span">|</Typography>
                        <ActionButton onClick={() => handleDelete(c.id)}>
                          {BUTTON_LABELS.CLOSE_ACCOUNT}
                        </ActionButton>
                      </ActionStack>
                    </BodyCell>
                  </BodyRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </StyledPaper>
  );
}
