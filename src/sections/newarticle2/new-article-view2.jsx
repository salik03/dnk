import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { Stack, Container } from '@mui/material';
import Typography from '@mui/material/Typography';

import Iconify from 'src/components/iconify/iconify';

const countries = ['India', 'USA', 'China', 'Brazil', 'United Kingdom'];

export default function NewArticleView2() {
  const [formValues, setFormValues] = useState({
    title: '',
    country: '',
    name: '',
    company: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    zipCode: '',
    email: '',
    phoneNumber: '',
    sendUpdates: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormValues({
      ...formValues,
      [name]: type === 'checkbox' ? checked : value,
    });
  };


  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h3">Reciever&apos;s Address</Typography>
        <Typography variant="caption" color='error' fontStyle="italic">
            *indicates required field
        </Typography>
        </Stack>
        <form >
          <Typography variant='h4'>
          Where is your shipment going?
          </Typography>

          <Box mt={2}>
            <TextField
              name="country"
              select
              label="Country*"
              variant="outlined"
              fullWidth
              value={formValues.country}
              onChange={handleChange}
            >
              {countries.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Box>

          <Box mt={2}>
            <TextField
              name="name"
              label="Name*"
              variant="outlined"
              fullWidth
              value={formValues.name}
              onChange={handleChange}
            />
          </Box>

          <Box mt={2}>
            <TextField
              name="company"
              label="Company/House Name"
              variant="outlined"
              fullWidth
              value={formValues.company}
              onChange={handleChange}
            />
          </Box>

          <Box mt={2}>
            <TextField
              name="addressLine1"
              label="Address Line 1*"
              variant="outlined"
              fullWidth
              value={formValues.addressLine1}
              onChange={handleChange}
            />
          </Box>

          <Box mt={2}>
            <TextField
              name="addressLine2"
              label="Address Line 2"
              variant="outlined"
              fullWidth
              value={formValues.addressLine2}
              onChange={handleChange}
            />
          </Box>

          <Box mt={2}>
            <TextField
              name="city"
              label="City*"
              variant="outlined"
              fullWidth
              value={formValues.city}
              onChange={handleChange}
            />
          </Box>

          <Box mt={2}>
            <TextField
              name="zipCode"
              label="Zip Code*"
              variant="outlined"
              fullWidth
              value={formValues.zipCode}
              onChange={handleChange}
            />
          </Box>

          <Box mt={2}>
            <TextField
              name="Remail"
              label="Recipient E-Mail*"
              variant="outlined"
              fullWidth
              value={formValues.email}
              onChange={handleChange}
            />
          </Box>

          <Box mt={2}>
            <TextField
              name="RphoneNumber"
              label="Recipient Phone Number*"
              variant="outlined"
              fullWidth
              value={formValues.phoneNumber}
              onChange={handleChange}
            />
          </Box>

          <Box mt={2}>
          <NavLink to="/newarticle">
           <Button
              variant="contained"
              color="warning"
              size='small'
              startIcon={<Iconify icon="grommet-icons:form-previous" />}
              style={{ marginRight: '10px' }}
            >
                Back
            </Button>
            </NavLink>
            <NavLink to="/">
            <Button
              variant="contained"
              color="primary"
            >
              Continue&nbsp;
              <Iconify icon="grommet-icons:form-next" />
            </Button>
            </NavLink>
          </Box>
        </form>
    </Container>
  );
}