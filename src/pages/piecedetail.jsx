import { Helmet } from 'react-helmet-async';

import { PieceDetail } from 'src/sections/piecedetails';

// ----------------------------------------------------------------------

export default function PiecePage() {
  return (
    <>
      <Helmet>
        <title> Piece Details </title>
      </Helmet>

    < PieceDetail/>

    </>
  );
}
