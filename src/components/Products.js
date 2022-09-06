import React from "react";
import Product from "../components/Product";
function Products() {
  let prouctsList = [
    {
      productName: "Wet Fruits",
      productImage0:
        "https://m.media-amazon.com/images/I/91B2erYxkEL._SL1500_.jpg",
      productImage1:
        "https://m.media-amazon.com/images/I/91B2erYxkEL._SL1500_.jpg",
      productImage2:
        "https://m.media-amazon.com/images/I/91B2erYxkEL._SL1500_.jpg",
      productImage3:
        "https://m.media-amazon.com/images/I/91B2erYxkEL._SL1500_.jpg"
    },
    {
      productName: "Dry Fruits",
      productImage0:
        "https://m.media-amazon.com/images/I/91B2erYxkEL._SL1500_.jpg",
      productImage1:
        "https://m.media-amazon.com/images/I/91B2erYxkEL._SL1500_.jpg",
      productImage2:
        "https://m.media-amazon.com/images/I/91B2erYxkEL._SL1500_.jpg",
      productImage3:
        "https://m.media-amazon.com/images/I/91B2erYxkEL._SL1500_.jpg"
    },
    {
      productName: "Wet Fruits",
      productImage0:
        "https://m.media-amazon.com/images/I/91B2erYxkEL._SL1500_.jpg",
      productImage1:
        "https://m.media-amazon.com/images/I/91B2erYxkEL._SL1500_.jpg",
      productImage2:
        "https://m.media-amazon.com/images/I/91B2erYxkEL._SL1500_.jpg",
      productImage3:
        "https://m.media-amazon.com/images/I/91B2erYxkEL._SL1500_.jpg"
    },
    {
      productName: "Dry Fruits",
      productImage0:
        "https://m.media-amazon.com/images/I/91B2erYxkEL._SL1500_.jpg",
      productImage1:
        "https://m.media-amazon.com/images/I/91B2erYxkEL._SL1500_.jpg",
      productImage2:
        "https://m.media-amazon.com/images/I/91B2erYxkEL._SL1500_.jpg",
      productImage3:
        "https://m.media-amazon.com/images/I/91B2erYxkEL._SL1500_.jpg"
    }
  ];
  return (
    <div className="text-center">
      <p className="display-2 text-info">Products</p>
      <div className="d-flex">
        <hr />
        {prouctsList.map((productObj) => (
          <Product productObj={productObj} />
        ))}
      </div>
    </div>
  );
}

export default Products;
