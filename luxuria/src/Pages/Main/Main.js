import React from 'react'
import './Main.css'
import Carousel from '../../compopnents/carousel/Carousel'
import Product from '../../compopnents/Product/Product'

export default function Main() {
  return (
    <div className='App-main'>
        <Carousel/>
        <Product/>
    </div>
  )
}
