import { styled } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';

export const StyledTable = styled(Table)(() => ({
  borderCollapse: 'collapse',
  borderSpacing: 0,
}));

export const CustomTableHead = styled(TableHead)(() => ({
  border: 'none',
}));

export const StyledPaper = styled(Paper)({
  marginLeft: '79px',
  marginTop: '50px',
  width: '1278px',
  borderRadius: '10px',
  overflow: 'hidden',
  border: '1px solid #E0D6C0',
  boxShadow: '0px 5px 15px 0px #00000033',
});

export const HeaderRow = styled(TableRow)(() => ({
  backgroundColor: '#650000',
  width: '1278px',
  height: '50px',
}));

export const HeaderCell = styled(TableCell)(() => ({
  color: '#FFFFFF',
  fontFamily: 'Poppins',
  fontWeight: 400,
  fontSize: '16px',
  height: '20px',
  lineHeight: 1,
  letterSpacing: '-0.02em',
  verticalAlign: 'bottom',
  padding: '15px 0px',
  border: 'none !important',
  boxShadow: 'none !important',
  outline: 'none !important',
  '&:first-of-type': {
    paddingLeft: '40px',
  },
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
  textRendering: 'optimizeLegibility',
}));

export const BodyRow = styled(TableRow)(({ theme }) => ({
  borderBottom: 'none',
  '& td': {
    border: 'none !important',
  },
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.action.hover,
  },
}));

export const BodyCell = styled(TableCell)(() => ({
  fontFamily: 'Poppins',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '25px',
  letterSpacing: '-0.02em',
  color: '#777777',
  height: '50px',
  verticalAlign: 'bottom',
  borderBottom: 'none !important',
  border: 'none !important',
  padding: '10px 0px',
  '&:first-of-type': {
    paddingLeft: '40px',
  },
}));

export const BalanceCell = styled(BodyCell)(() => ({
  fontWeight: 700,
}));

export const ActionCell = styled(BodyCell)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const ActionStack = styled(Stack)(() => ({
  fontFamily: 'Poppins',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: 1,
  letterSpacing: '-0.02em',
  color: '#650000',
}));

export const ActionButton = styled(Button)(() => ({
  minWidth: 0,
  padding: 0,
  textTransform: 'none',
  fontFamily: 'Poppins',
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: 1,
  letterSpacing: '-0.02em',
  color: '#650000',
}));
