import { Helmet } from 'react-helmet-async';

import { NewArticleView2 } from 'src/sections/newarticle2';

// ----------------------------------------------------------------------

export default function NewArtPage2() {
  return (
    <>
      <Helmet>
        <title> New Article 2 </title>
      </Helmet>

    <NewArticleView2 />

    </>
  );
}
