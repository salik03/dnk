import { Helmet } from 'react-helmet-async';

import { DocUpload } from 'src/sections/docupload/view';


// ----------------------------------------------------------------------

export default function BlogPage() {
  return (
    <>
      <Helmet>
        <title> Document Upload </title>
      </Helmet>

      <DocUpload />
    </>
  );
}
