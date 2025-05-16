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

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';


export interface ClientTableProps {
  data?: Client[];
}

export default function ClientTable({ data }: ClientTableProps) {
  if (!data) return null;
  
  if (data.length === 0) return <p>{NO_CLIENTS_FOUND}</p>;

  return (
    
    <TableContainer 
      component={Paper}
      elevation={6}
      sx={{ marginLeft: '79px',marginTop: '50px', borderRadius: '10px', overflow: 'hidden', width: '1278px', border: '1px solid #E0D6C0',  }}>
      <Table >
        <TableHead>
          <HeaderRow>
            {CLIENTS_TABLE_HEADER.map(({ label, align }) => (
              <HeaderCell key={label} align={align} sx={{ border: 'none' }}>
                {label}
              </HeaderCell>
            ))}
          </HeaderRow>
        </TableHead>

        <TableBody>
          {data.map((c) => (
            <BodyRow key={c.id} hover>
              <BodyCell align="left">{c.name}</BodyCell>
              <BodyCell align="center">
                {new Date(c.birthday).toLocaleDateString('en', {
                  month: '2-digit',
                  day: '2-digit',
                  year: 'numeric',
                  timeZone: 'UTC'
                }).replace(/\//g, ' / ')
            }
              </BodyCell>
              <BodyCell align="center">{c.accountType}</BodyCell>
              <BodyCell align="left">{c.accountNumber}</BodyCell>
              <BalanceCell align="left">
                {`${c.currency}${c.balance.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}`}
              </BalanceCell>
              <BodyCell align="center">
                <ActionStack direction="row" spacing={1} alignItems="center" justifyContent="center">
                  <ActionButton>
                    {BUTTON_LABELS.DETAILS}
                  </ActionButton>
                  <Typography component="span">|</Typography>
                  <ActionButton>
                    {BUTTON_LABELS.TRANSFER}
                  </ActionButton>
                  <Typography component="span">|</Typography>
                  <ActionButton>
                    {BUTTON_LABELS.CLOSE_ACCOUNT}
                  </ActionButton>
                </ActionStack>
              </BodyCell>
            </BodyRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
