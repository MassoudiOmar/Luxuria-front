import React, { useState, useEffect } from "react";
import "./Product-two.css";
import { useParams, Link } from "react-router-dom";

export default function ProductTwo(props) {
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
      <div className="Product-two-main">
        {product?.map((e, i) => {
          return (
            <div className="Product-two-card">
              <Link to={`/${e.title}`}>
                <img className="Product-two-Offeres-img" src={e.thumbnail} />
              </Link>
              <div className="Product-two-title-price">
                <span className="Product-two-Offeres-title">
                  {" "}
                  {e.title.length > 15
                    ? e.title.substring(0, 15) + "..."
                    : e.title}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
