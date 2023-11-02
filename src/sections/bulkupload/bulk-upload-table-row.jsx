import PropTypes from 'prop-types';

import Stack from '@mui/material/Stack';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export default function BulkTableRow({
  id,
  senderref,
  articletype,
  rowColor,
  producttype,
  servicecat,
  articleweight,
  nondeliveryinst,
  receipientref,
  nameofreceipient,
  receipientcompname,
  receipientaddressline1,
  receipientaddressline2,
  receipientcity,
  receipientpincode,
  receipientcountry,
  receipientemail,
  receipientmobile,
  nooflicence,
  noofcertificate,
  noofinvoice,
  insurancevaluesdr,
  selffilling,
  custombrokerlicenceno,
  custombrokername,
  custombrokeraddr,
  totalval,
  decl1,
  decl2,
  decl3,
  hscode,
  prd_desc,
  prd_qty_unit,
  count,
  prd_gross_wt,
  prd_wgt_net,
  origincountry,
  invoiceno,
  prd_inv_date,
  ecomm,
  ecomm_url,
  ecomm_pay_tranid,
  ecomm_sku_no,
  tax_inv_date,
  tax_inv_sno,
  tax_inv_val,
  asbl_fob,
  asbl_curr,
  expo_duty_rate,
  expo_duty_amt,
  cess_rate,
  cess_amt,
  lut_bond_det,
  igst_rate,
  igst_amt,
  comp_cess_rate,
  comp_ces_amt,
  t_duty,
  t_cess,
}) {
  const rowStyle = {
    backgroundColor: rowColor === 'red' ? '#ff0000' : 'lightgreen',
    color: 'white',
  };

  return (
    <TableRow style={rowStyle}>
      <TableCell component="th" scope="row" padding="centre">
        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography variant="subtitle2" noWrap>
            {id}
          </Typography>
        </Stack>
      </TableCell>
      <TableCell>{senderref}</TableCell>
      <TableCell>{articletype}</TableCell>
      <TableCell>{producttype}</TableCell>
      <TableCell>{servicecat}</TableCell>
      <TableCell>{articleweight}</TableCell>
      <TableCell>{nondeliveryinst}</TableCell>
      <TableCell>{receipientref}</TableCell>
      <TableCell>{nameofreceipient}</TableCell>
      <TableCell>{receipientcompname}</TableCell>
      <TableCell>{receipientaddressline1}</TableCell>
      <TableCell>{receipientaddressline2}</TableCell>
      <TableCell>{receipientcity}</TableCell>
      <TableCell>{receipientpincode}</TableCell>
      <TableCell>{receipientcountry}</TableCell>
      <TableCell>{receipientemail}</TableCell>
      <TableCell>{receipientmobile}</TableCell>
      <TableCell>{nooflicence}</TableCell>
      <TableCell>{noofcertificate}</TableCell>
      <TableCell>{noofinvoice}</TableCell>
      <TableCell>{insurancevaluesdr}</TableCell>
      <TableCell>{selffilling}</TableCell>
      <TableCell>{custombrokerlicenceno}</TableCell>
      <TableCell>{custombrokername}</TableCell>
      <TableCell>{custombrokeraddr}</TableCell>
      <TableCell>{totalval}</TableCell>
      <TableCell>{decl1}</TableCell>
      <TableCell>{decl2}</TableCell>
      <TableCell>{decl3}</TableCell>
      <TableCell>{hscode}</TableCell>
      <TableCell>{prd_desc}</TableCell>
      <TableCell>{prd_qty_unit}</TableCell>
      <TableCell>{count}</TableCell>
      <TableCell>{prd_gross_wt}</TableCell>
      <TableCell>{prd_wgt_net}</TableCell>
      <TableCell>{origincountry}</TableCell>
      <TableCell>{invoiceno}</TableCell>
      <TableCell>{prd_inv_date}</TableCell>
      <TableCell>{ecomm}</TableCell>
      <TableCell>{ecomm_url}</TableCell>
      <TableCell>{ecomm_pay_tranid}</TableCell>
      <TableCell>{ecomm_sku_no}</TableCell>
      <TableCell>{tax_inv_date}</TableCell>
      <TableCell>{tax_inv_sno}</TableCell>
      <TableCell>{tax_inv_val}</TableCell>
      <TableCell>{asbl_fob}</TableCell>
      <TableCell>{asbl_curr}</TableCell>
      <TableCell>{expo_duty_rate}</TableCell>
      <TableCell>{expo_duty_amt}</TableCell>
      <TableCell>{cess_rate}</TableCell>
      <TableCell>{cess_amt}</TableCell>
      <TableCell>{lut_bond_det}</TableCell>
      <TableCell>{igst_rate}</TableCell>
      <TableCell>{igst_amt}</TableCell>
      <TableCell>{comp_cess_rate}</TableCell>
      <TableCell>{comp_ces_amt}</TableCell>
      <TableCell>{t_duty}</TableCell>
      <TableCell>{t_cess}</TableCell>
    </TableRow>
  );
}

BulkTableRow.propTypes = {
  id: PropTypes.string,
  rowColor: PropTypes.string,
  senderref: PropTypes.string,
  articletype: PropTypes.string,
  producttype: PropTypes.string,
  servicecat: PropTypes.string,
  articleweight: PropTypes.string,
  nondeliveryinst: PropTypes.string,
  receipientref: PropTypes.string,
  nameofreceipient: PropTypes.string,
  receipientcompname: PropTypes.string,
  receipientaddressline1: PropTypes.string,
  receipientaddressline2: PropTypes.string,
  receipientcity: PropTypes.string,
  receipientpincode: PropTypes.string,
  receipientcountry: PropTypes.string,
  receipientemail: PropTypes.string,
  receipientmobile: PropTypes.string,
  nooflicence: PropTypes.string,
  noofcertificate: PropTypes.string,
  noofinvoice: PropTypes.string,
  insurancevaluesdr: PropTypes.string,
  selffilling: PropTypes.string,
  custombrokerlicenceno: PropTypes.string,
  custombrokername: PropTypes.string,
  custombrokeraddr: PropTypes.string,
  totalval: PropTypes.string,
  decl1: PropTypes.string,
  decl2: PropTypes.string,
  decl3: PropTypes.string,
  hscode: PropTypes.string,
  prd_desc: PropTypes.string,
  prd_qty_unit: PropTypes.string,
  count: PropTypes.string,
  prd_gross_wt: PropTypes.string,
  prd_wgt_net: PropTypes.string,
  origincountry: PropTypes.string,
  invoiceno: PropTypes.string,
  prd_inv_date: PropTypes.string,
  ecomm: PropTypes.string,
  ecomm_url: PropTypes.string,
  ecomm_pay_tranid: PropTypes.string,
  ecomm_sku_no: PropTypes.string,
  tax_inv_date: PropTypes.string,
  tax_inv_sno: PropTypes.string,
  tax_inv_val: PropTypes.string,
  asbl_fob: PropTypes.string,
  asbl_curr: PropTypes.string,
  expo_duty_rate: PropTypes.string,
  expo_duty_amt: PropTypes.string,
  cess_rate: PropTypes.string,
  cess_amt: PropTypes.string,
  lut_bond_det: PropTypes.string,
  igst_rate: PropTypes.string,
  igst_amt: PropTypes.string,
  comp_cess_rate: PropTypes.string,
  comp_ces_amt: PropTypes.string,
  t_duty: PropTypes.string,
  t_cess: PropTypes.string,
};
