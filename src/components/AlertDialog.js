import { Alert, Snackbar } from '@mui/material';
import React, { useState } from 'react';

const AlertDialog = ({type, message, openAlert}) => {
    const [open, setOpen] = openAlert;
    const handleClose = () => {
        setOpen(false);
      };
  return (
    <Snackbar open={open} anchorOrigin={{ vertical:'top', horizontal:'right' }} autoHideDuration={6000} onClose={handleClose} sx={{padding:'30px',}}  bodyStyle={{ height: 'auto', lineHeight: '28px', padding: 24, whiteSpace: 'pre-line' }}
    >
      <Alert severity={type}>{message}</Alert>
    </Snackbar>
  );
};

export default AlertDialog;
