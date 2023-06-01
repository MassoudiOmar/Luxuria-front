import React from "react";
import "./Product.css";
export default function Product() {
  var array = [1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <div>
      <div className="Offeres-product-title">
        <span className="title">Our Best Offers</span>
      </div>
      <div className="Product-main">
        {array.map((e, i) => {
          return (
            <div className="Product-card">
              <img
                className="Offeres-img"
                src="https://aswek.tn/19175-large_default/westpoint-t%C3%A9l%C3%A9viseur-32-led-hd-avec-r%C3%A9cepteur-int%C3%A9gr%C3%A9-noir.jpg"
              />
              <div className="title-price">
                <span className="Offeres-title">Title</span>
                <span className="Offeres-price">14.90</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="Offeres-product-title-two">
        <span className="title">Smartphones</span>
      </div>
      <div className="Product-main">
        {array.map((e, i) => {
          return (
            <div className="Product-card">
              <img
                className="Offeres-img"
                src="https://i.insider.com/5ea31a2ce61f3479373881c2?width=1000&format=jpeg&auto=webp"
              />
              <div className="title-price">
                <span className="Offeres-title">Title</span>
                <span className="Offeres-price">14.90</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="Offeres-product-title-three">
        <span className="title">Health beauty</span>
      </div>
      <div className="Product-main">
        {array.map((e, i) => {
          return (
            <div className="Product-card">
              <img
                className="Offeres-img"
                src="https://cdn.shopify.com/s/files/1/0341/3458/9485/products/FB70025_FB4081_1200x1200.jpg?v=1630600341"
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
