import React, { useState, useEffect } from "react";
import "./Main.css";
import Carousel from "../../compopnents/carousel/Carousel";
import Product from "../../compopnents/Product/Product";
import CarouselTwo from "../../compopnents/carousel-two/Carousel-two";
import Carouselthree from "../../compopnents/carousell-three/Carousel-three";
import Categorie from "../../compopnents/Categories/Categories";
import ProductTwo from "../../compopnents/Product-two/Product-two";
import OneProduct from "../One-product/One-product";
import Layout from "../../compopnents/Layout/Layout";
import Navbar from "../../compopnents/Nav-bar/Navbar";
import functions from "../../compopnents/Apis";

export default function Main() {
  const [laptops, setLaptops] = useState();
  const [phones, setPhones] = useState();
  const [skinCare, setSkinCare] = useState();
  const [homeDecore, setHomeDicor] = useState();
  const [fragrances, setFragrances] = useState();
  const [groceries, setGroceries] = useState();
  const [womanWatches, setWomanWatches] = useState();
  const [get12Product, set12Product] = useState();
  const [get24Product, set24Product] = useState();
  const [get25Product, set25Product] = useState();

  useEffect(() => {
    functions.getProductsByCategory("laptops", setLaptops);
    functions.getProductsByCategory("smartphones", setPhones);
    functions.getProductsByCategory("skincare", setSkinCare);
    functions.getProductsByCategory("lighting", setHomeDicor);
    functions.getProductsByCategory("fragrances", setFragrances);
    functions.getProductsByCategory("sunglasses", setGroceries);
    functions.getProductsByCategory("womens-watches", setWomanWatches);
    functions.getProductslimit(0,set12Product);
    functions.getProductslimit(12,set24Product);
    functions.getProductslimit(50,set25Product);
  }, []);

  return (
    <div className="App-main">
      <Carouselthree />

      <Categorie />
      <Carousel />
      <Product data={laptops} />
      <CarouselTwo />
      <ProductTwo data={get25Product} />
      <Product data={womanWatches} />
      <Carousel />
      <Product data={phones} />
      <CarouselTwo />
      <Product data={skinCare} />
      <ProductTwo data={get24Product} />
      <Product data={groceries} />
      <Carouselthree />
      <Carousel />
      <Product data={fragrances} />
      <CarouselTwo />
      <ProductTwo data={get12Product} />
      <Product data={homeDecore} />
      <Carousel />
    </div>
  );
}
