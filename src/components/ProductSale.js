import React from "react";
import "./Product.css";

const ProductSale = (props) => {
  return (
      <div className="frame">
        <div className="imgProduct">
          <img src={props.list.images[0]} />
        </div>
        <p className="product_name">{props.list.name}</p>
        <div className="inline">
        <p className="product_price sale">${props.list.price}</p>
        <p className="product_before">${props.list.before}</p>
        </div>
      </div>
  );
};

export default ProductSale;