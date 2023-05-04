import CardProduct from "../card/card";
import NativeSelectDemo from "../CategoryDrop";
import * as React from 'react';
import Pagination from '@mui/material/Pagination';

import "./product.css";
function Offer() {
  return (
    <section className="product">
     
        <NativeSelectDemo/>
          <CardProduct/>
       



   <section className="pagination">
      <Pagination count={10} color="primary" />
   </section>

 
      </section>

  );
}
export default Offer;
