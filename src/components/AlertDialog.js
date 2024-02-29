import { Alert, IconButton, Snackbar } from '@mui/material';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const AlertDialog = ({ type, message, openAlert }) => {
  const [open, setOpen] = openAlert;
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={open} autoHideDuration={6000} onClose={handleClose}>
    <Alert
      onClose={handleClose}
      severity={type}
      variant="filled"
      sx={{ width: '100%' }}
    >
      {message}
    </Alert>
  </Snackbar>
  );
};

export default AlertDialog;
