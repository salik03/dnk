import { Helmet } from 'react-helmet-async';

import { BulkUpload } from 'src/sections/bulkupload/view';

// ----------------------------------------------------------------------

export default function BulkPage() {
  return (
    <>
      <Helmet>
        <title> Bulk Upload </title>
      </Helmet>

      <BulkUpload />
    </>
  );
}
