import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Products, EmbroideryOptions } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../state/cartActions";

const Product_Details = () => {
  const { id } = useParams();
  const product = Products.find((item) => item.id === id);
  const [selectedImage, setSelectedImage] = useState(product.image[0]);
  const [EmbroideryOption, setEmbroideryOptions] = useState(false);
  const [blouse, setBlouse] = useState(false);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart) || [];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth", left: 0 });
  }, []);

  if (!product) {
    return (
      <div className="text-center text-lg font-semibold mt-8">
        Product not found
      </div>
    );
  }

  return (
    <div className="py-8 text-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4 position-relative">
          {/* Image Gallery Section */}
          <div className="md:flex-1 px-4  top-4 h-fit">
            <div className="h-fit rounded-lg mb-4">
              <img
                className="w-full h-fit object-cover rounded-lg object-center"
                src={selectedImage}
                alt={product.name}
              />
            </div>

            {/* Thumbnail Scroll for Multiple Images */}
            <div className="flex overflow-x-auto gap-2 mb-4">
              {product.image.map((img, idx) => (
                <img
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`h-[80px] w-[80px] cursor-pointer rounded-lg object-cover object-center border ${
                    selectedImage === img
                      ? "border-blue-500"
                      : "border-gray-300"
                  }`}
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Product Info Section */}
          <div className="md:flex-1 px-4 product-content-section">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {product.name}
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            {/* Embroidery Option for Saree */}
            <div className="mb-6">
              <h4 className="font-bold text-gray-700 mb-2">
                Select Saree Embroidery:
              </h4>
              <div className="grid grid-cols-2 gap-4">
                <button
                  className={`rounded-lg py-2 px-4 text-center text-white font-semibold focus:outline-none ${
                    EmbroideryOption ? "bg-[#ff4cb5]" : "bg-gray-400"
                  } transition duration-300 ease-in-out hover:bg-gray-500`}
                  onClick={() => {
                    setEmbroideryOptions(true);
                  }}
                >
                  With Embroidery
                </button> 
                <button
                  className={`rounded-lg py-2 px-4 text-center text-white font-semibold focus:outline-none ${
                    !EmbroideryOption ? "bg-[#ff4cb5]" : "bg-gray-400"
                  } transition duration-300 ease-in-out hover:bg-gray-500`}
                  onClick={() => {
                    setEmbroideryOptions(false);
                  }}
                >
                  Without Embroidery
                </button>
              </div>
            </div>

            {EmbroideryOption && (
              <div className="flex flex-wrap gap-4 mb-6">
                {EmbroideryOptions.map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <img
                      className="h-[80px] w-[80px] cursor-pointer rounded-lg object-cover object-center border"
                      src={item.image}
                      alt={`Thumbnail ${idx + 1}`}
                    />
                    <p className="text-gray-700 text-sm mt-2">
                      Price: {item.price}
                    </p>
                  </div>
                ))}

                <div className="">
                  Don't like this option? <Link to ='/emb-designs'>click here to see more</Link>
                </div>
              </div>
            )}

            {/* Blouse Size and Price */}
            <div className="mb-4">
              <span className="font-bold text-gray-700">Blouse Sizes:</span>
              <div className="flex items-center mt-2">
                {product.blouseSizes.map((size) => (
                  <button
                    key={size.size}
                    className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400"
                  >
                    {size.size}
                  </button>
                ))}
              </div>
            </div>

            {/* Return and Replacement Policy */}
            <div className="mb-6">
              <h4 className="font-bold text-gray-700 mb-2">
                Return and Replacement Policy:
              </h4>
              <p className="text-gray-600 text-sm">
                We offer a 7-day return policy on all products. Items must be
                returned in their original condition, unworn and unwashed. For
                embroidery-customized products, returns are not accepted unless
                there is a defect in the product. Replacement is available for
                defective items.
              </p>
            </div>

            {/* Add to Cart and Favorites Buttons */}
            <div className="flex -mx-2 mb-4 mt-4">
              {cart?.some((item) => item.id === product.id) ? (
                <Link to="/cart">
                  <div className=" px-2">
                    <button className="w-full bg-gray-800 text-white py-2 px-4 rounded-full border-0 font-bold hover:bg-black hover:text-white focus:outline-none focus:ring-0">
                      Go to Bag
                    </button>
                  </div>
                </Link>
              ) : (
                <div className="w-1/2 px-2">
                  <button
                    onClick={() => dispatch(addToCart(product))}
                    className="w-full bg-[#ff4cb5] text-white py-2 px-4 rounded-full border-0 font-bold hover:bg-black hover:text-white focus:outline-none focus:ring-0"
                  >
                    Add to Bag
                  </button>
                </div>
              )}
              <div className="w-1/2 px-2">
                <button className="w-full bg-light text-black py-2 px-4 rounded-full font-bold hover:bg-green-600 focus:outline-none focus:ring-0">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product_Details;
