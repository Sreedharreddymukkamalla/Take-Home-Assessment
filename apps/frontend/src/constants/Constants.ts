export const NO_CLIENTS_FOUND = 'No clients found.';
export const FETCH_CLIENTS_ERROR = 'Failed to fetch clients.';
export const CLIENT_DIRECTORY_TITLE = 'Client Directory';
export const ERROR_LOADING_CLIENTS = 'Error loading clients';

export const CLIENTS_TABLE_HEADER = [
  { label: 'Name',     align: 'left',   width: '282px' },
  { label: 'Birthday', align: 'center', width: '165px' },
  { label: 'Type',     align: 'center', width: '153px' },
  { label: 'Account',  align: 'left',   width: '208px', pl: '60px' },
  { label: 'Balance',  align: 'left',   width: '162px', pl: '30px' },
  { label: 'Actions',  align: 'center', width: '306px', pr:'40px' },
] as const;

export const BUTTON_LABELS = {
  DETAILS: 'Details',
  TRANSFER: 'Transfer',
  CLOSE_ACCOUNT: 'Close Account',
} as const;

export const ACCOUNT_TYPE_MENU_ITEMS = [
  { value: '', label: 'All' },
  { value: 'Checking', label: 'Checking' },
  { value: 'Savings', label: 'Savings' },
] as const;
