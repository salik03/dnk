import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';

function Receipt() {
  const reportTemplateRef = useRef(null);

  const handlePrint = () => {
    const printButton = document.querySelector('.button');
    const backButton = document.querySelector('.back-button');

    if (printButton) printButton.style.display = 'none';
    if (backButton) backButton.style.display = 'none';

    window.print();
  };

  useEffect(() => {
    window.onbeforeprint = () => {
      const printButton = document.querySelector('.button');
      const backButton = document.querySelector('.back-button');

      if (printButton) printButton.style.display = 'none';
      if (backButton) backButton.style.display = 'none';
    };

    window.onafterprint = () => {
      const printButton = document.querySelector('.button');
      const backButton = document.querySelector('.back-button');

      if (printButton) printButton.style.display = 'block';
      if (backButton) backButton.style.display = 'block';
    };
  }, []);

  return (
    <Container>
      <Button className="button" onClick={handlePrint}>
        Print
      </Button>
      <Link to="/dashboard" className='dropdown-item'>
        <Button className="back-button">
          Done
        </Button>
      </Link>
      <Grid container ref={reportTemplateRef} className="receipt-container">
        <Grid item xs={12}>
          <Paper className="receipt">
            <Typography variant="h4" className="receipt-title">ARTICLE BOOKED</Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="h6">SENDER'S DETAILS</Typography>
                <TableContainer component={Paper}>
                  <Table size="small">
                    <TableBody>
                      <TableRow>
                        <TableCell>NAME</TableCell>
                        <TableCell>PHONE NUMBER</TableCell>
                        <TableCell>COUNTRY</TableCell>
                        <TableCell>ADDRESS</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>John Doe</TableCell>
                        <TableCell>1234567890</TableCell>
                        <TableCell>USA</TableCell>
                        <TableCell>123 Street, City, State</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6">RECEIVER'S DETAILS</Typography>
                <TableContainer component={Paper}>
                  <Table size="small">
                    <TableBody>
                      <TableRow>
                        <TableCell>NAME</TableCell>
                        <TableCell>PHONE NUMBER</TableCell>
                        <TableCell>COUNTRY</TableCell>
                        <TableCell>ADDRESS</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Recipient Name</TableCell>
                        <TableCell>9876543210</TableCell>
                        <TableCell>Canada</TableCell>
                        <TableCell>456 Street, City, Province</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">ARTICLE DETAILS</Typography>
              <TableContainer component={Paper}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>ARTICLE ID</TableCell>
                      <TableCell>PRODUCT TYPE</TableCell>
                      <TableCell>ARTICLE NAME</TableCell>
                      <TableCell>INSURED</TableCell>
                      <TableCell>VALUE(INR)</TableCell>
                      <TableCell>GROSS WT</TableCell>
                      <TableCell>QUANTITY</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>1</TableCell>
                      <TableCell>Product Type</TableCell>
                      <TableCell>Product Name</TableCell>
                      <TableCell>Product Instructions</TableCell>
                      <TableCell>100</TableCell>
                      <TableCell>10 kg</TableCell>
                      <TableCell>2</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">PAYMENT DETAILS</Typography>
              <TableContainer component={Paper}>
                <Table size="small">
                  <TableBody>
                    <TableRow>
                      <TableCell>PAYMENT SESSION</TableCell>
                      <TableCell>PAYMENT GATEWAY</TableCell>
                      <TableCell>PAYMENT AMOUNT</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>1</TableCell>
                      <TableCell>PAYPAL</TableCell>
                      <TableCell>3000</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Receipt;
