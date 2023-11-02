import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import {
  Box,
  Card,
  Button,
  Stack,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
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

export default function PieceDetail() {
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
          <Typography variant="h3">Piece Details</Typography>
          <Typography variant="caption" color="error" fontStyle="italic">
            *indicates required field
          </Typography>
        </Stack>
        <Typography variant="h4" align="center">
          Almost finished. Let&apos;s fill the final details.
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
                Product Details
              </Typography>
            </Box>
            <Box
              mt={1}
              sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <FormControl variant="outlined" fullWidth sx={{ marginRight: 2 }}>
                <InputLabel htmlFor="quantity" sx={{ margin: '.5vh' }}>
                  Quantity
                </InputLabel>
                <Select
                  label="Quantity"
                  id="quantity"
                  name="quantity"
                  value={formValues.quantity}
                  onChange={handleChange}
                  sx={{ margin: '.5vh' }}
                >
                  <MenuItem value="1">1</MenuItem>
                  <MenuItem value="2">2</MenuItem>
                  <MenuItem value="3">3</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="units" sx={{ margin: '.5vh' }}>
                  Units
                </InputLabel>
                <Select
                  label="Units"
                  id="units"
                  name="units"
                  value={formValues.units}
                  onChange={handleChange}
                  sx={{ margin: '.5vh' }}
                >
                  <MenuItem value="pcs">pcs</MenuItem>
                  <MenuItem value="kg">kg</MenuItem>
                  <MenuItem value="m">m</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <TextField
                sx={{ margin: '.5vh', marginRight: 2 }}
                name="hsCode"
                label="HS Code"
                variant="outlined"
                fullWidth
                value={formValues.hsCode}
                onChange={handleChange}
              />
              <TextField
                name="productDescription"
                label="Product Description"
                variant="outlined"
                fullWidth
                value={formValues.productDescription}
                onChange={handleChange}
                sx={{ margin: '.5vh' }}
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
                Details of Parcels
              </Typography>
            </Box>
            <Box
              mt={1}
              sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <TextField
                name="invoiceNo"
                label="Invoice No."
                variant="outlined"
                fullWidth
                value={formValues.invoiceNo}
                onChange={handleChange}
                sx={{ margin: '.5vh', marginRight: 2 }}
              />
              <TextField
                name="invoiceDate"
                label="Invoice Date"
                variant="outlined"
                fullWidth
                value={formValues.invoiceDate}
                onChange={handleChange}
                sx={{ margin: '.5vh' }}
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <TextField
                name="grossWeight"
                label="Gross Weight (gms)*"
                variant="outlined"
                fullWidth
                value={formValues.grossWeight}
                onChange={handleChange}
                sx={{ margin: '.5vh', marginRight: 2 }}
              />
              <TextField
                name="netWeight"
                label="Net Weight (gms)*"
                variant="outlined"
                fullWidth
                value={formValues.netWeight}
                onChange={handleChange}
                sx={{ margin: '.5vh' }}
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
            <Box
              sx={{
                backgroundColor: '#1877f2',
                color: 'white',
                padding: '10px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Iconify icon="heroicons:currency-rupee" />
              <Typography variant="h4" sx={{ marginLeft: '10px' }}>
                Value under Section 14 of Customs Act
              </Typography>
            </Box>
            <Box
              mt={1}
              sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <TextField
                name="fob"
                label="FOB"
                variant="outlined"
                fullWidth
                value={formValues.fob}
                onChange={handleChange}
                sx={{ margin: '.5vh', marginRight: 2 }}
              />
              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="currency" sx={{ margin: '.5vh' }}>
                  Currency*
                </InputLabel>
                <Select
                  label="Currency"
                  id="currency"
                  name="currency"
                  value={formValues.currency}
                  onChange={handleChange}
                  sx={{ margin: '.5vh' }}
                >
                  <MenuItem value="pcs">pcs</MenuItem>
                  <MenuItem value="kg">kg</MenuItem>
                  <MenuItem value="m">m</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <TextField
                name="valueInCurrency"
                label="Value in Currency"
                variant="outlined"
                fullWidth
                value={formValues.valueInCurrency}
                onChange={handleChange}
                sx={{ margin: '.5vh', marginRight: 2 }}
              />
              <TextField
                name="exchangeRate"
                label="Exchange Rate*"
                variant="outlined"
                fullWidth
                value={formValues.exchangeRate}
                onChange={handleChange}
                sx={{ margin: '.5vh' }}
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
            <Box
              sx={{
                backgroundColor: '#1877f2',
                color: 'white',
                padding: '10px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Iconify icon="raphael:customer" />
              <Typography variant="h4" sx={{ marginLeft: '10px' }}>
                Custom Duties
              </Typography>
            </Box>
            <Box
              mt={1}
              sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <TextField
                name="exportDutyRate"
                label="Export Duty Rate"
                variant="outlined"
                fullWidth
                value={formValues.exportDutyRate}
                onChange={handleChange}
                sx={{ margin: '.5vh', marginRight: 2 }}
              />
              <TextField
                name="exportDutyAmount"
                label="Export Duty Amount"
                variant="outlined"
                fullWidth
                value={formValues.exportDutyAmount}
                onChange={handleChange}
                sx={{ margin: '.5vh' }}
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <TextField
                name="cessRate"
                label="Cess Rate"
                variant="outlined"
                fullWidth
                value={formValues.cessRate}
                onChange={handleChange}
                sx={{ margin: '.5vh', marginRight: 2 }}
              />
              <TextField
                name="cessAmount"
                label="Cess Amount"
                variant="outlined"
                fullWidth
                value={formValues.cessAmount}
                onChange={handleChange}
                sx={{ margin: '.5vh' }}
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
            <Box
              sx={{
                backgroundColor: '#1877f2',
                color: 'white',
                padding: '10px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Iconify icon="tabler:receipt-tax" />
              <Typography variant="h4" sx={{ marginLeft: '10px' }}>
                Tax/Commercial Invoice
              </Typography>
            </Box>
            <Box
              mt={1}
              sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <TextField
                name="cth"
                label="CTH"
                variant="outlined"
                fullWidth
                value={formValues.cth}
                onChange={handleChange}
                sx={{ margin: '.5vh', marginRight: 2 }}
              />
              <TextField
                name="invoiceNo"
                label="Invoice No."
                variant="outlined"
                fullWidth
                value={formValues.invoiceNo}
                onChange={handleChange}
                sx={{ margin: '.5vh' }}
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <TextField
                name="invoiceDate"
                label="Invoice Date"
                variant="outlined"
                fullWidth
                value={formValues.invoiceDate}
                onChange={handleChange}
                sx={{ margin: '.5vh', marginRight: 2 }}
              />
              <TextField
                name="siNo"
                label="SI No. of Item Invoice"
                variant="outlined"
                fullWidth
                value={formValues.siNo}
                onChange={handleChange}
                sx={{ margin: '.5vh' }}
              />
            </Box>
            <Box
              mt={1}
              sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <TextField
                name="value"
                label="Value"
                variant="outlined"
                fullWidth
                value={formValues.value}
                onChange={handleChange}
                sx={{ margin: '.5vh' }}
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
            <Box
              sx={{
                backgroundColor: '#1877f2',
                color: 'white',
                padding: '10px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Iconify icon="fluent:document-copy-24-regular" />
              <Typography variant="h4" sx={{ marginLeft: '10px' }}>
                GST Details
              </Typography>
            </Box>
            <Box
              mt={1}
              sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <TextField
                name="lutBondDetails"
                label="LUT/Bond Details*"
                variant="outlined"
                fullWidth
                value={formValues.lutBondDetails}
                onChange={handleChange}
                sx={{ margin: '.5vh', marginRight: 2 }}
              />
              <TextField
                name="igstRate"
                label="IGST Rate"
                variant="outlined"
                fullWidth
                value={formValues.igstRate}
                onChange={handleChange}
                sx={{ margin: '.5vh' }}
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <TextField
                name="igstAmount"
                label="IGST Amount"
                variant="outlined"
                fullWidth
                value={formValues.igstAmount}
                onChange={handleChange}
                sx={{ margin: '.5vh', marginRight: 2 }}
              />
              <TextField
                name="compensationRate"
                label="Compensation Rate"
                variant="outlined"
                fullWidth
                value={formValues.compensationRate}
                onChange={handleChange}
                sx={{ margin: '.5vh' }}
              />
            </Box>
            <Box
              mt={1}
              sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <TextField
                name="compensationAmount"
                label="Compensation Amount"
                variant="outlined"
                fullWidth
                value={formValues.compensationAmount}
                onChange={handleChange}
                sx={{ margin: '.5vh' }}
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
            <Box
              sx={{
                backgroundColor: '#1877f2',
                color: 'white',
                padding: '10px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Iconify icon="mdi:book-open-page-variant-outline" />
              <Typography variant="h4" sx={{ marginLeft: '10px' }}>
                E-Commerce Particulars
              </Typography>
            </Box>
            <Box
              mt={1}
              sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <TextField
                name="ecommerce"
                label="E-Commerce*"
                variant="outlined"
                fullWidth
                value={formValues.ecommerce}
                onChange={handleChange}
                sx={{ margin: '.5vh', marginRight: 2 }}
              />
              <TextField
                name="url"
                label="URL"
                variant="outlined"
                fullWidth
                value={formValues.url}
                onChange={handleChange}
                sx={{ margin: '.5vh' }}
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <TextField
                name="paymentTaxationId"
                label="Payment Taxation ID"
                variant="outlined"
                fullWidth
                value={formValues.paymentTaxationId}
                onChange={handleChange}
                sx={{ margin: '.5vh', marginRight: 2 }}
              />
              <TextField
                name="skuNo"
                label="SKU No."
                variant="outlined"
                fullWidth
                value={formValues.skuNo}
                onChange={handleChange}
                sx={{ margin: '.5vh' }}
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
            <Box
              sx={{
                backgroundColor: '#1877f2',
                color: 'white',
                padding: '10px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Iconify icon="ph:puzzle-piece" />
              <Typography variant="h4" sx={{ marginLeft: '10px' }}>
                Final Piece Information
              </Typography>
            </Box>
            <Box
              mt={1}
              sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}
            >
              <></>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <></>
            </Box>
          </Box>
          <Box
            mt={2}
            sx={{
              color: 'white',
              border: '1px solid #1877f2',
              borderRadius: '4px',
            }}
          >
            <></>
          </Box>
          <Box mt={2}>
            <NavLink to="/consigndetails">
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
            <NavLink to="/declaration">
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
