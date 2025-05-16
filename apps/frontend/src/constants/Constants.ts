export const NO_CLIENTS_FOUND = 'No clients found.';
export const FETCH_CLIENTS_ERROR = 'Failed to fetch clients.';
export const CLIENT_DIRECTORY_TITLE = 'Client Directory';

export const CLIENTS_TABLE_HEADER = [
  { label: 'Name',     align: 'left'   },
  { label: 'Birthday', align: 'center' },
  { label: 'Type',     align: 'center' },
  { label: 'Account',  align: 'left'   },
  { label: 'Balance',  align: 'left'   },
  { label: 'Actions',  align: 'center' },
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
