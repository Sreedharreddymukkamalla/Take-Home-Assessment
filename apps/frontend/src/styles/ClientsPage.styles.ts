import { SxProps, Theme } from '@mui/system';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const alertStyles: SxProps<Theme> = {
  width: '1278px',           
  height: '50px',    
  borderRadius: '10px',    
  border: '1px solid #E0D6C0', 
  marginLeft: '80px',
};

export const PageContainer = styled(Box)({
  backgroundColor: '#fff',
  height: '1005px',
  width: '1440px',
  marginTop: '75px',
});

export const loaderStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};

export const loaderContainerStyles = {
  display: 'flex',
  justifyContent: 'center',
  mt: 4,
};

