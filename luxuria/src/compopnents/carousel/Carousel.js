import React from "react";
import "./Carousel.css";
export default function carousel() {
  return (
    <div className="carousel-main">
      <div className="Carousel">
        <span className="Carousel-span">
          <img
            className="Carousel-img"
            src="https://queue-it.com/media/ppcp1twv/product-drop.jpg"
          />
        </span>
        <span className="Carousel-span">
          <img
            className="Carousel-img"
            src="https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/wp-cms/uploads/2022/03/p-1-most-innovative-products-2022-90731853.jpg"
          />
        </span>
        <span className="Carousel-span">
          <img
            className="Carousel-img"
            src="https://listverse.com/wp-content/uploads/2019/12/jbareham_190718_3551_0011.0.0.jpg"
          />
        </span>
      </div>
    </div>
  );
}
