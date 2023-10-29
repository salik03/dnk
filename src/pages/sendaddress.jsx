import { Helmet } from 'react-helmet-async';

import { SendAddressView } from 'src/sections/senderaddress';

// ----------------------------------------------------------------------

export default function NewArtPage() {
  return (
    <>
      <Helmet>
        <title> New Article </title>
      </Helmet>

    <SendAddressView />

    </>
  );
}
