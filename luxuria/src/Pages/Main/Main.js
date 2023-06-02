import React from 'react'
import './Main.css'
import Carousel from '../../compopnents/carousel/Carousel'
import Product from '../../compopnents/Product/Product'
import CarouselTwo from '../../compopnents/carousel-two/Carousel-two'
import Carouselthree from '../../compopnents/carousell-three/Carousel-three'
import Categorie from '../../compopnents/Categories/Categories'
import ProductTwo from '../../compopnents/Product-two/Product-two'
import OneProduct from '../../compopnents/One-product/One-product'
export default function Main() {
  return (
    <div className='App-main'>
     <Carouselthree/>
        <Categorie/>
        <Product/>
        <CarouselTwo/>
        <ProductTwo/>
        <Product/>
        <Carousel/>
        <Product/> 
        <Categorie/>
        <Product/>
     <Carouselthree/>
        <CarouselTwo/>
        <ProductTwo/>
        <Product/>
        <Carousel/>
        <Product/> 
        <CarouselTwo/>
        <ProductTwo/>
        <Product/>
        <Carousel/>
        <Product/> 
    </div>
  )
}
