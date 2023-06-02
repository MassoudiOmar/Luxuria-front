import React, { useState } from "react";
import "./One-product.css";

export default function OneProduct() {
  const [image, setImage] = useState(
    "https://technologystore.tn/482-large_default/xiaomi-redmi-note-10-4128go-blanc.jpg"
  );
  var array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <>
    <div className="One-product-main">
      <div className="product-Image-div-Product-details">
        <div className="product-Image-div">
          <img className="product-Image" src={image} />
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
                  "https://technologystore.tn/482-large_default/xiaomi-redmi-note-10-4128go-blanc.jpg"
                  );
                }}
                className="product-other-Image"
              src="https://technologystore.tn/482-large_default/xiaomi-redmi-note-10-4128go-blanc.jpg"
            />
          </div>
        </div>
        <div className="More-details">more details</div>
        <div className="Client-comments">client comments</div>
   
      </div>
      <div className="Product-details">
        <span className="product-title">
          HONOR Magic5 Pro Smartphone 5G, 12+512 Go, Écran Incurvé AMOLED 6,81"
          HDR 120 Hz, Triple Caméra 50 MP Falcon Capture, Qualcomm Snapdragon 8
          Gen 2, 5100 mAh, IP68, Double SIM, Android 13, Noir
        </span>
        <span className="product-marque">
          Marque: Mi | Produits similaires par Mi
        </span>
        <span className="product-rank">****</span>
        <span className="product-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </span>
        <span className="product-price">15.99 TND</span>
        <input type="button" className="buy-button" value="ADD TO CARD" />
      </div>
            </div>
      <div className="Sumilar-products">
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
        </div>
            </>
  );
}
