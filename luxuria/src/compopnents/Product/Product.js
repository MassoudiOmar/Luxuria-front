import React, { useState, useEffect } from "react";
import "./Product.css";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function Product(props) {
  const [product, setProduct] = useState();

  useEffect(() => {
    setProduct(props.data);
  }, [props.data]);

  useEffect(() => {
    if (props.data === undefined) {
      console.log("Error occurred while fetching data");
    }
  }, []);

  return (
    <div>
      <div className="Offeres-product-title-two">
        <span className="title">{product && product[0]?.category}</span>
      </div>
      <div className="Product-main">
        {product ? (
          product.map((e, i) => (
            <div className="Product-card" key={i}>
              <Link to={`/${e.title}`}>
                <img className="Offeres-img" src={e.thumbnail} alt={e.title} />
                {e.discountPercentage > 10 ? (
                  <span className="discount-percentage">
                    {-Math.floor(e.discountPercentage) + "%"}
                  </span>
                ) : null}
              </Link>
              <span className="Offeres-title">
                {e.title.length > 20
                  ? e.title.substring(0, 20) + "..."
                  : e.title}
              </span>
              <div className="title-price">
                <span className="Offeres-price">
                  {(
                    e.price -
                    ((e.price / 100) * e.discountPercentage).toFixed(2)
                  ).toFixed(2)}
                  TND
                </span>
                <span className="Offeres-finalprice">
                  <s>{e.price.split(".")[0]}TND</s>
                </span>
              </div>
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
