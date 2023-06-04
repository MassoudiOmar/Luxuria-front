import React, { useState, useEffect } from "react";
import "./Catalog-product.css";

export default function Productcatalog() {
  var array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <div>
      <div className="Product-catalog-main">
        {array.map((e, i) => {
          return (
            <div className="Product-catalog-card">
              <img
                className="Product-catalog-Offeres-img"
                src="https://b2cfurniture.com.au/pub/media/catalog/product/cache/3fb871f48f7af5e44260f2d9fd3932a9/e/l/elm-modern-hardwood-dining-chair-black-hardwood-frame-eco-friendly-beige-fabric_3_.jpg"
              />
              <div className="Product-catalog-title-price">
                <span className="Product-catalog-Offeres-title">Title</span>
                <span className="Product-catalog-Offeres-price">12.99</span>
              </div>
              <input className="buy-catalog-button" type="button" value="ADD TO CARD"/>
            </div>
          );
        })}
      </div>
    </div>
  );
}
