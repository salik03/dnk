import { Helmet } from 'react-helmet-async';

import { ConsignDetail } from 'src/sections/considetails';

// ----------------------------------------------------------------------

export default function PiecePage() {
  return (
    <>
      <Helmet>
        <title> Consign Details </title>
      </Helmet>

      <ConsignDetail />
    </>
  );
}
