import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import {
  Stack,
  Table,
  Button,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer
} from '@mui/material';

import Scrollbar from 'src/components/scrollbar';
import Iconify from 'src/components/iconify/iconify';

import { applyFilter, getComparator } from 'src/sections/articleupload/utils';

import BulkTableRow from '../bulk-upload-table-row';

export default function ProductsView() {
  const [csvContent, setCsvContent] = useState(null);
  const [isCsvUploaded, setIsCsvUploaded] = useState(false); 

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const content = e.target.result;
      setCsvContent(content);
      setIsCsvUploaded(true);
    };

    reader.readAsText(file);
  };

  const renderCsvAsTable = () => {
    if (!csvContent) return null;

    const lines = csvContent.split('\n');
    const rows = lines.slice(1).map((line) => line.split(','));

    const headLabel = [
      { id: 'id', label: 'ID' },
      { id: 'senderref', label: 'Sender Reference' },
      { id: 'articletype', label: 'Article Type' },
      { id: 'producttype', label: 'Product Type' },
      { id: 'servicecat', label: 'Service Category' },
      { id: 'articleweight', label: 'Article Weight' },
      { id: 'nondeliveryinst', label: 'Non-Delivery Instructions' },
      { id: 'receipientref', label: 'Recipient Reference' },
      { id: 'nameofreceipient', label: 'Name of Recipient' },
      { id: 'receipientcompname', label: 'Recipient Company Name' },
      { id: 'receipientaddressline1', label: 'Recipient Address Line 1' },
      { id: 'receipientaddressline2', label: 'Recipient Address Line 2' },
      { id: 'receipientcity', label: 'Recipient City' },
      { id: 'receipientpincode', label: 'Recipient Pincode' },
      { id: 'receipientcountry', label: 'Recipient Country' },
      { id: 'receipientemail', label: 'Recipient Email' },
      { id: 'receipientmobile', label: 'Recipient Mobile' },
      { id: 'nooflicence', label: 'Number of Licenses' },
      { id: 'noofcertificate', label: 'Number of Certificates' },
      { id: 'noofinvoice', label: 'Number of Invoices' },
      { id: 'insurancevaluesdr', label: 'Insurance Value (Declared)' },
      { id: 'selffilling', label: 'Self-filling' },
      { id: 'custombrokerlicenceno', label: 'Custom Broker License Number' },
      { id: 'custombrokername', label: 'Custom Broker Name' },
      { id: 'custombrokeraddr', label: 'Custom Broker Address' },
      { id: 'totalval', label: 'Total Value' },
      { id: 'decl1', label: 'Declaration 1' },
      { id: 'decl2', label: 'Declaration 2' },
      { id: 'decl3', label: 'Declaration 3' },
      { id: 'hscode', label: 'HS Code' },
      { id: 'prd_desc', label: 'Product Description' },
      { id: 'prd_qty_unit', label: 'Product Quantity Unit' },
      { id: 'count', label: 'Count' },
      { id: 'prd_gross_wt', label: 'Product Gross Weight' },
      { id: 'prd_wgt_net', label: 'Product Net Weight' },
      { id: 'origincountry', label: 'Origin Country' },
      { id: 'invoiceno', label: 'Invoice Number' },
      { id: 'prd_inv_date', label: 'Product Invoice Date' },
      { id: 'ecomm', label: 'E-commerce' },
      { id: 'ecomm_url', label: 'E-commerce URL' },
      { id: 'ecomm_pay_tranid', label: 'E-commerce Payment Transaction ID' },
      { id: 'ecomm_sku_no', label: 'E-commerce SKU Number' },
      { id: 'tax_inv_date', label: 'Tax Invoice Date' },
      { id: 'tax_inv_sno', label: 'Tax Invoice Serial Number' },
      { id: 'tax_inv_val', label: 'Tax Invoice Value' },
      { id: 'asbl_fob', label: 'Assessable FOB Value' },
      { id: 'asbl_curr', label: 'Assessable Currency' },
      { id: 'expo_duty_rate', label: 'Export Duty Rate' },
      { id: 'expo_duty_amt', label: 'Export Duty Amount' },
      { id: 'cess_rate', label: 'Cess Rate' },
      { id: 'cess_amt', label: 'Cess Amount' },
      { id: 'lut_bond_det', label: 'LUT Bond Details' },
      { id: 'igst_rate', label: 'IGST Rate' },
      { id: 'igst_amt', label: 'IGST Amount' },
      { id: 'comp_cess_rate', label: 'Compensation Cess Rate' },
      { id: 'comp_ces_amt', label: 'Compensation Cess Amount' },
      { id: 't_duty', label: 'Total Duty' },
      { id: 't_cess', label: 'Total Cess' }
    ];

    return (
      <Scrollbar>
      <TableContainer sx={{ overflow: 'unset' }}>      
      <Table>
        <TableHead>
          <TableRow>
            {headLabel.map((headCell) => (
              <TableCell key={headCell.id}>{headCell.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {applyFilter({
            inputData: rows,
            comparator: getComparator('asc', 'id'),
          }).map((row, rowIndex) => (
            <BulkTableRow
              key={rowIndex}
              selected={false}
              id={row[0]}
              rowColor={Math.random() < 0.5 ? 'red' : 'green'}
              senderref={row[1]}
              articletype={row[2]}
              producttype={row[3]}
              servicecat={row[4]}
              articleweight={row[5]}
              nondeliveryinst={row[6]}
              receipientref={row[7]}
              nameofreceipient={row[8]}
              receipientcompname={row[9]}
              receipientaddressline1={row[10]}
              receipientaddressline2={row[11]}
              receipientcity={row[12]}
              receipientpincode={row[13]}
              receipientcountry={row[14]}
              receipientemail={row[15]}
              receipientmobile={row[16]}
              nooflicence={row[17]}
              noofcertificate={row[18]}
              noofinvoice={row[19]}
              insurancevaluesdr={row[20]}
              selffilling={row[21]}
              custombrokerlicenceno={row[22]}
              custombrokername={row[23]}
              custombrokeraddr={row[24]}
              totalval={row[25]}
              decl1={row[26]}
              decl2={row[27]}
              decl3={row[28]}
              hscode={row[29]}
              prd_desc={row[30]}
              prd_qty_unit={row[31]}
              count={row[32]}
              prd_gross_wt={row[33]}
              prd_wgt_net={row[34]}
              origincountry={row[35]}
              invoiceno={row[36]}
              prd_inv_date={row[37]}
              ecomm={row[38]}
              ecomm_url={row[39]}
              ecomm_pay_tranid={row[40]}
              ecomm_sku_no={row[41]}
              tax_inv_date={row[42]}
              tax_inv_sno={row[43]}
              tax_inv_val={row[44]}
              asbl_fob={row[45]}
              asbl_curr={row[46]}
              expo_duty_rate={row[47]}
              expo_duty_amt={row[48]}
              cess_rate={row[49]}
              cess_amt={row[50]}
              lut_bond_det={row[51]}
              igst_rate={row[52]}
              igst_amt={row[53]}
              comp_cess_rate={row[54]}
              comp_ces_amt={row[55]}
              t_duty={row[56]}
              t_cess={row[57]}
            />
          ))}
        </TableBody>
      </Table>
      </TableContainer>
      </Scrollbar>
    );
  };

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Bulk Upload</Typography>
        <Button variant="contained" color="success" startIcon={<Iconify icon="tabler:download" />}
          href="https://docs.google.com/spreadsheets/d/1J4bGxcogRDO49TfGW7bAR8bn6M70tW78/edit?usp=sharing&ouid=100733601089450328957&rtpof=true&sd=true"
          target="_blank"
          rel="noopener noreferrer"
          className="download-button"
        >
          Download Excel Template
        </Button>
      </Stack>
      <div>
        <input type="file" accept=".csv" onChange={handleFileUpload} />
        <div>{renderCsvAsTable()}</div>
        {isCsvUploaded && ( 
          <Stack mt={3}>
          <NavLink to="/">
            <Button variant="contained" color="success" startIcon={<Iconify icon="mingcute:save-line" />}>
              Save
            </Button>
          </NavLink>
        </Stack>
        )}
      </div>
    </Container>
  );
}





