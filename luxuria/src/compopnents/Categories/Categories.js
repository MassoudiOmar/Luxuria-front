import React, { useState, useEffect } from "react";
import "./Categories.css";

export default function Categorie() {
  var array = [1, 1, 1, 1, 1, 1, 1,1,1,1,1,1, 1];

  return (
    <div>
      <div className="Categorie-main">
        {array.map((e, i) => {
          return (
            <div className="Categorie-card">
              <img
                className="Offeres-Categorie-img"
                src="https://cdn.shopify.com/s/files/1/0242/4607/articles/esstisch-form-s.jpg?v=1664266044"
              />
              <div className="title-Categorie-price">
                <span className="Offeres-title">Title</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
