import React, { useState, useEffect } from "react";
import "./Product-two.css";

export default function ProductTwo() {
  var array = [1, 1, 1, 1, 1, 1, 1, 1,1,1,1,1];

  return (
    <div>
      <div className="Product-two-main">
        {array.map((e, i) => {
          return (
            <div className="Product-two-card">
              <img
                className="Product-two-Offeres-img"
                src="https://b2cfurniture.com.au/pub/media/catalog/product/cache/3fb871f48f7af5e44260f2d9fd3932a9/e/l/elm-modern-hardwood-dining-chair-black-hardwood-frame-eco-friendly-beige-fabric_3_.jpg"
              />
              <div className="Product-two-title-price">
                <span className="Product-two-Offeres-title">Title</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
