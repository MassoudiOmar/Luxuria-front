import React, { useState, useEffect } from "react";
import "./Categories.css";
import axios from "axios";

export default function Categorie() {
  var array = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  const [categories, setcategories] = useState();

 
  return (
    <div>
      <div className="Categorie-main">
        {categories?.map((e, i) => {
          return (
            <div className="Categorie-card" key={i}>
              <img
                className="Offeres-Categorie-img"
                src={"https://cdn.shopify.com/s/files/1/0242/4607/articles/esstisch-form-s.jpg?v=1664266044"}
              />
              <div className="title-Categorie-price">
                <span className="Offeres-title"> {e?.length > 7
                      ? e?.substring(0, 7) + "..."
                      : e}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
