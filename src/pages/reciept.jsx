import React from 'react';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import Iconify from 'src/components/iconify/iconify';

function Receipt() {
  const handlePrint = () => {
    const newWindow = window.open('src/pages/receipt.html', '_blank');
    if (newWindow) {
      newWindow.focus();
    }
  };

  return (
    <div>
      <h1>Your Receipt</h1>
      <h3>Your article is booked!</h3>
      <Button startIcon={<Iconify icon="el:print" />} variant="contained" color="primary" onClick={handlePrint}  style={{ marginRight: '10px' }}>
        Print Receipt
      </Button>
      <NavLink to="/">
      <Button variant="contained" color="error">
        Done
      </Button>
      </NavLink>
    </div>
  );
}

export default Receipt;
