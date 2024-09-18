import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { Link } from "react-router-dom";

const Product_Card = ({ item }) => {
  return (
    <Link to={`/product-details/${item.id}`}>
      <div className="productCard w-[44vw] sm:w-[22vw] h-fit border m-1 sm:m-2 transition-all cursor-pointer hover:shadow-lg rounded-lg">
        <div className="h-[65%] overflow-hidden rounded-t-lg">
          <img
            className="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
            src={item.image[0]}
            alt={item.name}
          />
        </div>
        <div className="textPart bg-white p-2 rounded-b-lg">
          <p className="font-semibold text-sm text-gray-800 truncate">
            {item.name}
          </p>
          <div className="flex items-center space-x-1 sm:space-x-2 my-1">
            <p className="font-semibold text-sm sm:text-md">₹{item.price}</p>
            <p className="text-gray-400 line-through text-xs">
              ₹{item.price + 500}
            </p>
            <p className="text-green-600 font-semibold text-xs">{10}% off</p>
          </div>
          <Link
            to={`/product/${item.id}`}
            className="text-[#ff4cb5] text-sm hover:underline"
          >
            View Product
          </Link>
        </div>
      </div>
    </Link>
  );
};

const ProductCarousel = ({ products }) => {
  const items = products.map((item) => (
    <Product_Card key={item.id} item={item} />
  ));

  return (
    <div className="w-full p-2 sm:p-4">
      <AliceCarousel
        mouseTracking
        infinite
        disableDotsControls
        items={items}
        responsive={{
          0: { items: 2, paddingLeft: 10, paddingRight: 10 },
          600: { items: 3, paddingLeft: 0, paddingRight: 0 },
          1024: { items: 4, paddingLeft: 0, paddingRight: 0 },
        }}
        autoPlay
        autoPlayInterval={2000}
        renderPrevButton={() => (
          <button
            style={{
              border: "1px solid #d1d5db", // Soft gray border
              borderRadius: "50%", // Circle button
              backgroundColor: "#ffffff", // White background
              padding: "10px", // Increase padding for better icon positioning
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add subtle shadow
              cursor: "pointer",
            }}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-xl sm:text-2xl hover:bg-gray-100 transition-all duration-300"
          >
            &#8592;
          </button>
        )}
        renderNextButton={() => (
          <button
            style={{
              border: "1px solid #d1d5db", // Soft gray border
              borderRadius: "50%", // Circle button
              backgroundColor: "#ffffff", // White background
              padding: "10px", // Increase padding for better icon positioning
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add subtle shadow
              cursor: "pointer",
            }}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-xl sm:text-2xl hover:bg-gray-100 transition-all duration-300"
          >
            &#8594;
          </button>
        )}
      />
    </div>
  );
};

export default ProductCarousel;
export {Product_Card};