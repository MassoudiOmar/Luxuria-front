import React, { useState, useEffect } from "react";
import "./Carousel-three.css";

export default function Carouselthree() {
  const images = [
    "https://www.dusal.co.uk/content/assets/Duvet-Pillows-Header-Web-Ready.jpg",
    "https://www.visenze.com/wp-content/uploads/2023/01/Blog-cover-2000x500-1.png",
    "https://www.visenze.com/wp-content/uploads/2022/02/Merchandising-e1643960924910.png",
    "https://s14761.pcdn.co/wp-content/uploads/sites/2/2023/03/Ibis_Oso_2023_GT_E-MTB_WEB_Res-3278-2000x500.jpg",
    "https://dealerimages.dealereprocess.com/image/upload/3014052",
    "https://www.contxtful.com/hubfs/3M_SAFE_B.jpg",
    "https://www.knoxmitsubishi.com.au/wp-content/uploads/selling-car-pb.webp",
    "https://normalbear.com/wp-content/uploads/2022/08/in-store-advertising-Normal-Bear.jpg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="carousel-three-main">
      <div className="Carousel-three">
        <span className="Carousel-three-span">
          <img
            className="Carousel-three-img"
            src={images[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
          />
        </span>
      </div>
    </div>
  );
}
