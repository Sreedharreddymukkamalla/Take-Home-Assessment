'use client';

import { useState, FormEvent } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';        
import Box from '@mui/material/Box';              
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputAdornment from '@mui/material/InputAdornment';

import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import CustomIcon from './CustomIcon';

import { DateField } from '@mui/x-date-pickers/DateField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';

import {
  formContainer,
  nameField,
  birthdayField,
  selectField,
  submitButton,
  searchBoxContainer,   
  iconContainer,   
  headerTitle,
  checkingMenuItemStyles,    
  MenuItemStyles                      
} from '@/styles/ClientSearchForm.styles';

import {
  CLIENT_DIRECTORY_TITLE,
  ACCOUNT_TYPE_MENU_ITEMS,
} from '@/constants/Constants';

export interface SearchFormProps {
  onSearch: (params: { name?: string; birthday?: string; accountType?: string }) => void;
}

export default function ClientSearchForm({ onSearch }: SearchFormProps) {
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState<Dayjs | null>(null);
  const [accountType, setAccountType] = useState('Checking');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(birthday)
    const birthdayStr = birthday ? birthday.format('YYYY-MM-DD') : undefined;
    onSearch(
      Object.fromEntries(
        Object.entries({ name, birthday: birthdayStr, accountType }).filter(([, v]) => v)
      ) as any
    );
  };

  return (
    <Paper elevation={6} sx={searchBoxContainer}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography component="h2" sx={headerTitle}>
          {CLIENT_DIRECTORY_TITLE}
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={formContainer}>
          <Box sx={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <TextField
              label="Name"
              value={name}
              onChange={e => {
                const newName = e.target.value
                setName(newName)
                const birthdayStr = birthday ? birthday.format('YYYY-MM-DD') : undefined
                onSearch(
                  Object.fromEntries(
                    Object.entries({ name: newName, birthday: birthdayStr, accountType }).filter(([, v]) => v)
                  ) as any
                )
              }}
              variant="outlined"
              size="small"
              sx={nameField}
              slotProps={{
                inputLabel: { shrink: true }
              }}
            />



            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateField
                label="Birthday"
                format="MM / DD / YYYY"
                value={birthday}
                onChange={newVal => setBirthday(newVal)}
                sx={birthdayField}
                slotProps={{ textField: { 
                  placeholder: 'MM / DD / YYYY',size: 'small',
              InputProps: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Typography
                      variant="body2" // Matches input size
                      sx={{ color: 'gray', minWidth: '0px' }}
                    ></Typography>
                  </InputAdornment>
                ),
              },
                InputLabelProps: {
                  shrink: true, 
                }, sx: birthdayField }, }}
              />
            </LocalizationProvider>






            <FormControl variant="outlined" size="small" sx={selectField} fullWidth>
              <InputLabel shrink>Account Type</InputLabel>
              <Select
                value={accountType}
                onChange={(e: SelectChangeEvent) => {
                  setAccountType(e.target.value)
                  const birthdayStr = birthday ? birthday.format('YYYY-MM-DD') : undefined;
                  console.log('birthdayStr', birthdayStr);
                  onSearch(
                    Object.fromEntries(
                      Object.entries({ name, birthday: birthdayStr, accountType: e.target.value }).filter(([, v]) => v)
                    ) as any
                  );
                }}
                sx={MenuItemStyles}
              >
                {ACCOUNT_TYPE_MENU_ITEMS.map(item => (
                  <MenuItem
                    key={item.value}
                    value={item.value}
                    sx={checkingMenuItemStyles}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <IconButton
              type="submit"
              aria-label="Search clients"
              sx={submitButton}
            >
            <CustomIcon src="searchIcon.png" alt="Search Icon" size={23} />
            </IconButton>
          </Box>



          <Box sx={iconContainer}>
            <CustomIcon src="notificationIcon.png" alt="Notification Icon" size={28} />
            <CustomIcon src="settingsIcon.png" alt="Settings Icon" size={28} />
            <Avatar
              src="/images/user-profile.png"
              alt="User Avatar"
              sx={{
                width: 50,
                height: 50,
                cursor: 'pointer',
                border: '1px solid #650000',
              }}
            />
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}
