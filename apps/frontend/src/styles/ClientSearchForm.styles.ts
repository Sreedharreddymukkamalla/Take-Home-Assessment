import { SxProps, Theme } from '@mui/system';

export const formContainer: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  paddingLeft: '40px'
};


export const searchBoxContainer: SxProps<Theme> = {
  width: '1278px',           
  height: '173px',           
  borderRadius: '10px',    
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  border: '1px solid #E0D6C0', 
  justifyContent: 'space-between',
  marginLeft: '80px',
  boxShadow: '0px 5px 15px 0px #00000033',
};

export const MenuItemStyles: SxProps<Theme> = {
  fontFamily: 'Poppins',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '100%',
  letterSpacing: '-0.02em',
  color: '#454545',
  padding: '10px 0px 0px 0px',
};

export const checkingMenuItemStyles: SxProps<Theme> = {
  fontFamily: 'Poppins',
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '100%',
  letterSpacing: '-0.02em',
  color: '#454545',
};

export const nameField: SxProps<Theme> = {
  width: '505px',
  fontFamily: 'Poppins',
  '& .MuiOutlinedInput-notchedOutline legend': {
    width:'40px'
  },
  '& .MuiInputLabel-root.MuiInputLabel-shrink': {
    fontFamily: 'Poppins',
    color: '#650000',
    fontSize: '10px',
    height: '16px'
  },
  '& .MuiInputLabel-root': {
  fontFamily: 'Poppins',
  color: '#650000',
  },
  '& .MuiOutlinedInput-root': {
    height: '50px',
    borderRadius: '10px',
    boxShadow: '0px 1px 2px rgba(0,0,0,0.05)',
    '& fieldset': {
      borderWidth: '2px',
      borderColor: '#650000',
    },
    '&:hover fieldset, &.Mui-focused fieldset': {
      borderColor: '#650000',
    },
  },
  backgroundColor: '#FFFFFF',
};

export const birthdayField: SxProps<Theme> = {
  width: '181px',
  '& .MuiPickersOutlinedInput-notchedOutline legend': {
    width:'52px'
  },

  '& .MuiInputLabel-root.MuiInputLabel-shrink': {
    fontFamily: 'Poppins',
    color: '#454545',
    fontSize: '10px',
    height: '16px',
  },


  '& .MuiPickersOutlinedInput-root': {
    borderRadius: '10px',
    height: '50px',
    fontFamily: 'Poppins',
    color: '#E0E0E0',
    padding: '0px 15px',
    boxShadow: '0px 1px 2px rgba(0,0,0,0.05)',
    '& fieldset': {
      borderWidth: '2px',
      borderColor: '#D9D9D9',
    },
    '&:hover fieldset, &.Mui-focused fieldset': {
      borderColor: '#D9D9D9',
    },
    
  '&.Mui-focused fieldset': {
    borderColor: '#D9D9D9 !important', // Force override on focus
  },

  },
  backgroundColor: '#FFFFFF',
};

export const selectField: SxProps<Theme> = {
  width: '173px',
  fontFamily: 'Poppins',
    '& .MuiOutlinedInput-notchedOutline legend': {
      width:'80px'
    },
  '& .MuiInputLabel-root.MuiInputLabel-shrink': {
    fontFamily: 'Poppins',
    color: '#454545',
    fontSize: '10px',
    height: '16px',
  },
  '& .MuiInputLabel-root': {
  fontFamily: 'Poppins',
  color: '#454545',
  },
  '& .MuiOutlinedInput-root': {
    display: 'flex',
    justifyContent: 'flex-start',
    height: '50px',
    borderRadius: '10px',
    padding: '11px 0px 6px 0px',
    boxShadow: '0px 1px 2px rgba(0,0,0,0.05)',
    '& fieldset': {
      borderWidth: '2px',
      borderColor: '#D9D9D9',
    },
    '&:hover fieldset, &.Mui-focused fieldset': {
      borderColor: '#D9D9D9',
    },
  },
  backgroundColor: '#FFFFFF',
};

export const submitButton: SxProps<Theme> = {
  minWidth: 0,
  width: '52px',
  height: '50px',
  p: 0,
  borderRadius: '10px',
  border: '1px solid #000',
  bgcolor: '#650000',
  boxShadow: '0px 1px 2px rgba(0,0,0,0.05)',
  '&:hover': {
    bgcolor: '#580000',
    boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
  },
};

export const headerTitle: SxProps<Theme> = {
  display: 'flex',
  alignItems: 'center',
  fontFamily: 'Poppins',
  fontWeight: 700,
  fontSize: '20px',
  height: '30px',
  lineHeight: 1,
  letterSpacing: '-0.02em',
  color: '#650000',
  paddingLeft: '40px'
};

export const iconContainer: SxProps<Theme> = {
  paddingLeft: '111px',
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
};

export const avatarStyles = {
  width: 50,
  height: 50,
  cursor: 'pointer',
  border: '1px solid #650000',
};

export const inputRow = {
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
};

export const searchBoxInnerContainer = {
  display: 'flex',
  flexDirection: 'column',
  gap: '18px',
  marginTop: '35px',
  marginBottom: '40px',
};