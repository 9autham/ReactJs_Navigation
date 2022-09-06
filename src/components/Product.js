import React from "react";
import Image from "./image";
function Product(props) {
  return (
    <div className="card card-body">
      <div className="d-flex container">
        {/* <Image scr={props.productObj.productImage1}/> */}
        <Image src={props.productObj.productImage1} />
        <Image src={props.productObj.productImage2} />
        {/* <Image scr={props.productObj.productImage2} /> */}
      </div>
      <div className="d-flex">
        <Image src={props.productObj.productImage3} />
        <Image src={props.productObj.productImage2} />
      </div>
      <p className="">{props.productObj.productName}</p>
    </div>
  );
}

export default Product;
