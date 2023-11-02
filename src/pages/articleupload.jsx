import { Helmet } from 'react-helmet-async';

import { ArticleUploadView } from 'src/sections/articleupload/view';

// ----------------------------------------------------------------------

export default function ArticleUploadPage() {
  return (
    <>
      <Helmet>
        <title> Article Upload </title>
      </Helmet>

      <ArticleUploadView />
    </>
  );
}
