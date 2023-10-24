import { Helmet } from 'react-helmet-async';

import { BulkUpload } from 'src/sections/bulkupload/view';


// ----------------------------------------------------------------------

export default function ProductsPage() {
  return (
    <>
      <Helmet>
        <title> Bulk Upload </title>
      </Helmet>

      <BulkUpload />
    </>
  );
}
