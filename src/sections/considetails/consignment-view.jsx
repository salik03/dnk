import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import {
  Stack,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Card,
} from '@mui/material';
import Iconify from 'src/components/iconify/iconify';
import StaticTimeline from './stamps-view';

const formContainerStyle = {
  flex: 2,
  padding: '20px',
};

const timelineContainerStyle = {
  flex: 1,
  padding: '20px',
};

export default function ConsignDetail() {
  const [formValues, setFormValues] = useState({
    quantity: '',
    units: '',
    hsCode: '',
    productDescription: '',
    invoiceNo: '',
    invoiceDate: '',
    grossWeight: '',
    netWeight: '',
    fob: '',
    currency: '',
    valueInCurrency: '',
    exchangeRate: '',
    exportDutyRate: '',
    exportDutyAmount: '',
    cessRate: '',
    cessAmount: '',
    cth: '',
    siNo: '',
    value: '',
    lutBondDetails: '',
    igstRate: '',
    igstAmount: '',
    compensationRate: '',
    compensationAmount: '',
    ecommerce: '',
    url: '',
    paymentTaxationID: '',
    skuNo: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <Card style={{ display: 'flex' }}>
      <div style={formContainerStyle}>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h3">Consignment Details</Typography>
          <Typography variant="caption" color="error" fontStyle="italic">
            *indicates required field
          </Typography>
        </Stack>
        <Typography variant="h4" align="center">
          What kind of package are you shipping?
        </Typography>

        <form>
          <Box
            mt={5}
            sx={{
              color: 'white',
              border: '1px solid #1877f2',
              borderRadius: '4px',
            }}
          >
            <Box
              sx={{
                backgroundColor: '#1877f2',
                color: 'white',
                padding: '10px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Iconify icon="fluent:box-16-regular" />
              <Typography variant="h4" sx={{ marginLeft: '10px' }}>
                Consignment Details
              </Typography>
            </Box>
            <Box
              mt={1}
              sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <TextField
                name="itemsconsign"
                label="No. of Types of Items in Consignment*"
                variant="outlined"
                fullWidth
                value={formValues.invoiceNo}
                onChange={handleChange}
                sx={{ marginTop: 1, marginRight: 2, marginLeft: 2 }}
              />
              <TextField
                name="grssweight*"
                label="Gross Weight*"
                variant="outlined"
                fullWidth
                value={formValues.invoiceDate}
                onChange={handleChange}
                sx={{ marginTop: 1, marginRight: 2 }}
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <TextField
                name="grossWeight"
                label="Total Value*"
                variant="outlined"
                fullWidth
                value={formValues.grossWeight}
                onChange={handleChange}
                sx={{ marginTop: 2, marginRight: 2, marginLeft: 2 }}
              />
              <TextField
                name="netWeight"
                label="SDR Value"
                variant="outlined"
                fullWidth
                value={formValues.netWeight}
                onChange={handleChange}
                sx={{ marginTop: 2, marginRight: 2 }}
              />
            </Box>
            <FormControl variant="outlined" fullWidth sx={{ marginRight: 2 }}>
              <InputLabel htmlFor="selectPBE" sx={{ marginTop: 2, marginLeft: 2 }}>
                Select PBE
              </InputLabel>
              <Select
                label="Select PBE"
                id="selectPBE"
                name="selectPBE"
                value={formValues.quantity}
                onChange={handleChange}
                sx={{ marginTop: 2, marginRight: 2, marginBottom: 2, marginLeft: 2 }}
              >
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="3">3</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box
            mt={5}
            sx={{
              color: 'white',
              border: '1px solid #1877f2',
              borderRadius: '4px',
            }}
          >
            <Box
              sx={{
                backgroundColor: '#1877f2',
                color: 'white',
                padding: '10px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Iconify icon="mdi:square-edit-outline" />
              <Typography variant="h4" sx={{ marginLeft: '10px' }}>
                Miscellaneous Details
              </Typography>
            </Box>
            <Box
              mt={1}
              sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <TextField
                name="invoiceNo"
                label="DOP Customer ID"
                variant="outlined"
                fullWidth
                value={formValues.invoiceNo}
                onChange={handleChange}
                sx={{ marginTop: 1, marginRight: 2, marginLeft: 2 }}
              />
              <TextField
                name="invoiceDate"
                label="DP Contract No."
                variant="outlined"
                fullWidth
                value={formValues.invoiceDate}
                onChange={handleChange}
                sx={{ marginTop: 1, marginRight: 2 }}
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <TextField
                name="grossWeight"
                label="IEC"
                variant="outlined"
                fullWidth
                value={formValues.grossWeight}
                onChange={handleChange}
                sx={{ marginTop: 2, marginRight: 2, marginLeft: 2 }}
              />
              <TextField
                name="netWeight"
                label="GSTIN"
                variant="outlined"
                fullWidth
                value={formValues.netWeight}
                onChange={handleChange}
                sx={{ marginTop: 2, marginRight: 2, marginBottom: 2 }}
              />
            </Box>
          </Box>
          <Box
            mt={5}
            sx={{
              color: 'white',
              border: '1px solid #1877f2',
              borderRadius: '4px',
            }}
          >
            {' '}
            <></>
          </Box>
          <Box mt={2}>
            <NavLink to="/recieveaddress">
              <Button
                variant="contained"
                color="warning"
                size="small"
                startIcon={<Iconify icon="grommet-icons:form-previous" />}
                style={{ marginRight: '10px' }}
              >
                Back
              </Button>
            </NavLink>
            <NavLink to="/piecedetails">
              <Button variant="contained" color="primary">
                Continue&nbsp;
                <Iconify icon="grommet-icons:form-next" />
              </Button>
            </NavLink>
          </Box>
        </form>
      </div>
      <div style={timelineContainerStyle}>
        <StaticTimeline />
      </div>
    </Card>
  );
}
