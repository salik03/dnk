import { Helmet } from 'react-helmet-async';

import { RecieverAddressView } from 'src/sections/recieveraddress';


// ----------------------------------------------------------------------

export default function RecieverPage() {
  return (
    <>
      <Helmet>
        <title> New Article 2 </title>
      </Helmet>

    <RecieverAddressView />

    </>
  );
}
