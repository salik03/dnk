import { Helmet } from 'react-helmet-async';

import { NewArticleView } from 'src/sections/newarticle'
// ----------------------------------------------------------------------

export default function NewArtPage() {
  return (
    <>
      <Helmet>
        <title> New Article </title>
      </Helmet>

    <NewArticleView />

    </>
  );
}
