import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import {
  Table,
  Button,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Container,
  Typography,
} from '@mui/material';

import UserTableToolbar from 'src/sections/articleupload/user-table-toolbar';
import { emptyRows, applyFilter, getComparator, visuallyHidden } from 'src/sections/articleupload/utils';

import BulkTableRow from '../bulk-upload-table-row';

export default function ProductsView() {
  const [csvContent, setCsvContent] = useState(null);
  const [filterName, setFilterName] = useState('');

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const content = e.target.result;
      setCsvContent(content);
    };

    reader.readAsText(file);
  };

  const handleFilterName = (event) => {
    setFilterName(event.target.value);
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
      <Table>
<TableHead>
  <TableRow>
    <TableCell padding="checkbox">
      <div style={visuallyHidden}>Select All</div>
    </TableCell>
    {headLabel.map((headCell) => (
      <TableCell key={headCell.id}>{headCell.label}</TableCell>
    ))}
  </TableRow>
</TableHead>

        <TableBody>
        {applyFilter({
  inputData: rows,
  comparator: getComparator('asc', 'id'), 
  filterName,
}).map((row, rowIndex) => (
  <BulkTableRow
    key={rowIndex}
    selected={false}
    name={row[0]} 
    company={row[1]} 
    role={row[2]} 
    isVerified={row[3]} 
    status={row[4]} 
    handleClick={() => {}}
  />
))}

          {emptyRows(0, 5, rows.length) > 0 && (
            <TableRow style={{ height: 53 * emptyRows(0, 5, rows.length) }}>
              <TableCell colSpan={headLabel.length + 1} />
            </TableRow>
          )}
        </TableBody>
      </Table>
    );
  };

  return (
    <Container>
      <Typography variant="h4" sx={{ mb: 5 }}>
        Bulk Upload
      </Typography>
      <div>
        <input type="file" accept=".csv" onChange={handleFileUpload} />
        <UserTableToolbar filterName={filterName} onFilterName={handleFilterName} />
        <div>{renderCsvAsTable()}</div>
        <NavLink to="/">
          <Button>Save</Button>
        </NavLink>
        <a
          href="https://docs.google.com/spreadsheets/d/1J4bGxcogRDO49TfGW7bAR8bn6M70tW78/edit?usp=sharing&ouid=100733601089450328957&rtpof=true&sd=true"
          target="_blank"
          rel="noopener noreferrer"
          className="download-button"
        >
          Download Excel Template
        </a>
      </div>
    </Container>
  );
}
