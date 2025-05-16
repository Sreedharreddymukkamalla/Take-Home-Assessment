'use client';
import { Client } from '@/types/client';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import {
  HeaderRow,
  HeaderCell,
  BodyRow,
  BodyCell,
  BalanceCell,
  ActionStack,
  ActionButton,
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
    try {
      const res = await fetch(`http://localhost:8080/clients/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete client');
      setClients(prev => prev.filter(c => c.id !== id));
      setAlert({ type: 'success', message: 'Client deleted.' });
    } catch (e) {
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
  
  if (clients.length === 0) return <p>{NO_CLIENTS_FOUND}</p>;

  return (
    <Paper
      sx={{
        marginLeft: '125px',
        marginTop: '50px',
        width: '1278px',
        borderRadius: '10px',
        overflow: 'hidden',
        border: '1px solid #E0D6C0',
        boxShadow: '0px 5px 15px 0px #00000033',
      }}
    >
      <ClientAlert open={open} alert={alert} onClose={handleClose} />
      <TableContainer >
        <Table sx={{ tableLayout: 'fixed', width: 'auto' }}>
          <TableHead>
            <HeaderRow>
              {CLIENTS_TABLE_HEADER.map(({ label, align, width, pl, pr }) => (
                <HeaderCell
                  key={label}
                  align={align}
                  sx={{
                    border: 'none',
                    width,
                    ...(pl ? { pl } : {}),
                    ...(pr ? { pr } : {}),
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
    </Paper>
  );
}
