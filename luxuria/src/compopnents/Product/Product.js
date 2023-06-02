import React, { useState, useEffect } from "react";
import "./Product.css";

export default function Product() {
  var array = [1, 1, 1, 1, 1,1,1,1,1,1,1,1,1,1,1,1,1];

  return (
    <div>
      <div className="Offeres-product-title-two">
        <span className="title">Smartphones</span>
      </div>
      <div className="Product-main">
        {array.map((e, i) => {
          return (
            <div className="Product-card">
              <img
                className="Offeres-img"
                src="https://www.financialexpress.com/wp-content/uploads/2021/03/redmi-main.jpg"
              />
              <div className="title-price">
                <span className="Offeres-title">Title</span>
                <span className="Offeres-price">14.90</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
