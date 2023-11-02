import { Helmet } from 'react-helmet-async';

import { DocUpload } from 'src/sections/docupload/view';

// ----------------------------------------------------------------------

export default function DocPage() {
  return (
    <>
      <Helmet>
        <title> Document Upload </title>
      </Helmet>

      <DocUpload />
    </>
  );
}
