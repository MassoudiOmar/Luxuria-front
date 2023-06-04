import React, { useState, useEffect } from "react";
import "./One-product.css";
import { useParams, Link } from "react-router-dom";
import Product from "../../compopnents/Product/Product";
import functions from "../../compopnents/Apis";

export default function OneProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState();
 console.log(product,"?4PROD3")
 
  const [image, setImage] = useState(
    "https://www.xiaomiboutique.com/wp-content/uploads/2023/05/Redmi-Note-12-Pro-5G_pms_1679660368.91083800.png"
  );

  useEffect(() => {
    functions.getProdByName(productId, setProduct);
  }, []);

  return (
    <>
      <div className="One-product-main">
        {
          product?.map((e,i)=>{
              return(
                <>
            <div className="product-Image-div-Product-details">
          <div className="product-Image-div">
            <img className="product-Image" src={e?.thumbnail} />
            <div className="product-other-images">
              <img
                onClick={() => {
                  setImage(
                    "https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/23/6682/1.jpg?0541"
                    );
                  }}
                  className="product-other-Image"
                  src="https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/23/6682/1.jpg?0541"
                  />
              <img
                onClick={() => {
                  setImage(
                    "https://www.cdiscount.com/pdt2/4/8/3/1/1200x1200/PHO2008649747483/rw/lot-2-cables-pour-xiaomi-redmi-note-8-pro-redmi-no.jpg"
                    );
                  }}
                  className="product-other-Image"
                  src="https://www.cdiscount.com/pdt2/4/8/3/1/1200x1200/PHO2008649747483/rw/lot-2-cables-pour-xiaomi-redmi-note-8-pro-redmi-no.jpg"
                  />
              <img
                onClick={() => {
                  setImage(
                    "https://ae01.alicdn.com/kf/H12e07e71a46f43b8a6184081e07e90d3M/Xiaomi-Chargeur-de-c-ble-USB-Type-C-d-origine-Turbo-Fast-Charge-Mi-11-9.jpg_.webp"
                    );
                  }}
                  className="product-other-Image"
                  src="https://ae01.alicdn.com/kf/H12e07e71a46f43b8a6184081e07e90d3M/Xiaomi-Chargeur-de-c-ble-USB-Type-C-d-origine-Turbo-Fast-Charge-Mi-11-9.jpg_.webp"
                  />
              <img
                onClick={() => {
                  setImage(
                    "https://www.xiaomiboutique.com/wp-content/uploads/2023/05/Redmi-Note-12-Pro-5G_pms_1679660368.91083800.png"
                    );
                }}
                className="product-other-Image"
                src="https://www.xiaomiboutique.com/wp-content/uploads/2023/05/Redmi-Note-12-Pro-5G_pms_1679660368.91083800.png"
                />
            </div>
          </div>
          {/* <div className="More-details">more details</div> */}
        </div>
        <div className="Product-details">
          <span className="product-title">{e?.title}</span>
          <span className="product-marque">{e?.brand}</span>
          <span className="product-rank">{e.rating}</span>
          <span className="product-description">{e?.description}</span>
          <span className="product-price">{e?.price} TND</span>
          <input type="button" className="buy-button" value="ADD TO CARD" />
        </div>
                </>
              )
            })
          }
      </div>
      <div className="Client-comments">
        <Product />
      </div>

      <Product />
    </>
  );
}
