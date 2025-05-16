import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export interface ClientAlertProps {
  readonly open: boolean;
  readonly alert: { type: 'success' | 'error'; message: string } | null;
  readonly onClose: (event?: React.SyntheticEvent | Event, reason?: string) => void;
}

export default function ClientAlert({ open, alert, onClose }: ClientAlertProps) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert
        onClose={onClose}
        severity={alert?.type ?? 'info'}
        sx={{ width: '100%', display: alert ? undefined : 'none' }}
      >
        {alert?.message ?? ''}
      </Alert>
    </Snackbar>
  );
}
