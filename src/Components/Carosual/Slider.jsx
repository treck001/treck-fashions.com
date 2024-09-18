import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (event) => {
    setActiveIndex(event.item);
  };

  const items = [
    <img
      src="https://images.cbazaar.com/pl_images/bannerimages/CB_WP_Aug21.jpg"
      alt="Saree Collection"
      className="w-full h-full object-cover rounded-lg shadow-lg"
    />,
    <img
      src="https://images.cbazaar.com/pl_images/bannerimages/CB_WP_Aug16.jpg"
      alt="Lehenga Collection"
      className="w-full h-full object-cover rounded-lg shadow-lg"
    />,
    <img
      src="https://images.cbazaar.com/pl_images/bannerimages/CB_WP_Aug20.jpg"
      alt="Saree Collection"
      className="w-full h-full object-cover rounded-lg shadow-lg"
    />,
  ];

  return (
    <section className="relative w-full md:h-fit lg:h-fit overflow-hidden">
      <AliceCarousel
        autoPlay
        autoPlayInterval={2000}
        infinite
        autoHeight={false}
        disableButtonsControls
        items={items}
        animationDuration={800}
        disableDotsControls={true}
        mouseTracking
        onSlideChanged={handleSlideChange}
        renderPrevButton={() => (
          <button className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-2xl p-2 rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 transition duration-300">
            &#8592;
          </button>
        )}
        renderNextButton={() => (
          <button className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-2xl p-2 rounded-full bg-white bg-opacity-50 hover:bg-opacity-100 transition duration-300">
            &#8594;
          </button>
        )}
      />
      {/* Active Index Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {items.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-white" : "bg-gray-400"
            } transition-all duration-300`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Slider;
