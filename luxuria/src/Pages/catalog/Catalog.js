import React, { useEffect, useState } from "react";
import "./Catalog.css";
import Productcatalog from "../../compopnents/Catalog-product/Catalog-product";
import Product from "../../compopnents/Product/Product";
import functions from "../../compopnents/Apis";

export default function Catalog() {
  var arr = [5, 5, 5, 5, 5, 5, 5, 5, 5];
  var arr1 = [5];
  const [maxMoney, setmaxMoney] = useState(50);
  const [product, setProduct] = useState(50);
  const handleChange = (event) => {
    setmaxMoney(event.target.value);
  };

useEffect(()=>{
},[])

  return (
    <>
      <div className="catalog-main">
        <div className="side-filter">
          <div className="catalog-search">
            <span className="catalog-title">Catalog</span>
            <span className="catalog-categories">Téléphone Mobile</span>
            <span className="catalog-categories">Tablette</span>
          </div>
          <div>
            <span className="catalog-title">Marque</span>
            <div className="marque-search">
              {arr.map((e, i) => {
                return (
                  <div className="marques-list">
                    <input type="checkbox" />
                    <span className="marque-name">marque name</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="price-search">
            <span className="catalog-title">Price</span>
            <input
              type="range"
              min="0"
              max="1500"
              onChange={handleChange}
              class="double-range-slider"
            />
            <span className="price-Max-value">
              Highest price : {maxMoney} TND
            </span>
          </div>
          <div>
            <span className="catalog-title">Solde</span>
            <div className="solde-search">
              {arr1.map((e, i) => {
                return (
                  <div className="solde-list">
                    <input type="checkbox" />
                    <span className="marque-name">80% and more</span>
                  </div>
                );
              })}
              {arr1.map((e, i) => {
                return (
                  <div className="solde-list">
                    <input type="checkbox" />
                    <span className="marque-name">60% and more</span>
                  </div>
                );
              })}
              {arr1.map((e, i) => {
                return (
                  <div className="solde-list">
                    <input type="checkbox" />
                    <span className="marque-name">40% and more</span>
                  </div>
                );
              })}
              {arr1.map((e, i) => {
                return (
                  <div className="solde-list">
                    <input type="checkbox" className="solde-checkbox" />
                    <span className="marque-name">20% and more</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="product-filtered">
          <Productcatalog />
        </div>
      </div>
      <Product />
    </>
  );
}
