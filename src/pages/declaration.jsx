import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Card } from '@mui/material';

const DeclarationForm = () => {
  const [checkboxes, setCheckboxes] = useState({
    isExpertPromotionChecked: false,
    isZeroRateExportsChecked: false,
    isGoodsExemptChecked: false,
    isContentTrueChecked: false,
  });

  const handleCheckboxChange = (checkbox) => {
    setCheckboxes({
      ...checkboxes,
      [checkbox]: !checkboxes[checkbox],
    });
  };

  useEffect(() => {
    const areAllChecked = Object.values(checkboxes).every((isChecked) => isChecked);
    const submitButton = document.getElementById('submitBtn');
    if (submitButton) {
      submitButton.disabled = !areAllChecked;
    }
  }, [checkboxes]);

  return (
    <Card sx={{ padding: '2vh', alignSelf: 'center', justifySelf: 'center' }}>
      <form>
        <Typography variant="h4" gutterBottom sx={{ margin: '1vh' }}>
          Declaration
        </Typography>
        <Typography variant="subtitle" gutterBottom sx={{ margin: '1vh' }}>
          Check all the boxes to book the article!
        </Typography>
        <FormControlLabel
          control={
            <Checkbox
              checked={checkboxes.isExpertPromotionChecked}
              onChange={() => handleCheckboxChange('isExpertPromotionChecked')}
            />
          }
          label="We declare that we intend to claim rewards under expert promotion Scheme"
          sx={{ display: 'flex', margin: '1vh' }}
        />
        <FormControlLabel
          sx={{ display: 'flex', margin: '1vh' }}
          control={
            <Checkbox
              checked={checkboxes.isZeroRateExportsChecked}
              onChange={() => handleCheckboxChange('isZeroRateExportsChecked')}
            />
          }
          label="We declare that we intend to zero rate our exports under Section 16 of IGST Act"
        />
        <FormControlLabel
          sx={{ display: 'flex', margin: '1vh' }}
          control={
            <Checkbox
              checked={checkboxes.isGoodsExemptChecked}
              onChange={() => handleCheckboxChange('isGoodsExemptChecked')}
            />
          }
          label="We declare that the goods are exempted under CGST/SGST/UTGST/IGST Acts"
        />
        <FormControlLabel
          sx={{ display: 'flex', margin: '1vh' }}
          control={
            <Checkbox
              checked={checkboxes.isContentTrueChecked}
              onChange={() => handleCheckboxChange('isContentTrueChecked')}
            />
          }
          label="We hereby declare that the contents of this postal bill of export are true and correct in every respect"
        />
        <Button
          sx={{ margin: '1vh' }}
          id="submitBtn"
          type="submit"
          variant="contained"
          color="primary"
          disabled={!Object.values(checkboxes).every((isChecked) => isChecked)}
          component={Link}
          to="/reciept"
        >
          Submit
        </Button>
      </form>
    </Card>
  );
};

export default DeclarationForm;
