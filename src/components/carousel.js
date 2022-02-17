import React, { useState, useEffect, useRef } from "react";
import { carouseldata } from "./carouseldata";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

// The carousel
const Carousel = ({ carousels }) => {
  const [current, setCurrent] = useState(0);
  const length = carousels.length;
  const timeout = useRef(null);

  // auto change effect
  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };

    timeout.current = setTimeout(nextSlide, 3000);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(carousels) || carousels.length <= 0) {
    return null;
  }

  return (
    <div>
      <section className="carousel">
        <FaArrowAltCircleLeft className="L-arrow" onClick={prevSlide} />
        <FaArrowAltCircleRight className="R-arrow" onClick={nextSlide} />
        {carouseldata.map((carousel, index) => {
          return (
            <div
              key={index}
            >
              {index === current && (
                <img src={carousel.image} alt="pizza img" className="image" />
              )}
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Carousel;
