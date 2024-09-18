import React from 'react';
import { useDispatch } from 'react-redux';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../../state/cartActions';

const CartProduct = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-white border border-gray-200 rounded-lg shadow-md p-2 mb-4">
      <div className="flex items-center space-x-4 md:space-x-6 w-full md:w-auto">
        <img
          src={product.image[0]}
          alt="Product"
          className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-md"
        />
        <div className="flex-1">
          <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
          {/* <p className="text-gray-600">Size: M | Color: Red</p> */}
          <p className="text-gray-800 font-bold mt-1">
            ₹{new Intl.NumberFormat("en-IN").format(product.price)}
          </p>
        </div>
      </div>
      <div className="flex items-center mt-4 md:mt-0 space-x-2 md:space-x-4">
        <button
          onClick={() => dispatch(decreaseQuantity(product))}
          className="bg-gray-300 text-gray-700 py-1 px-2 md:py-2 md:px-4 rounded-md hover:bg-gray-400"
        >
          -
        </button>
        <span className="text-gray-800 text-lg md:text-xl">{product.qty}</span>
        <button
          onClick={() => dispatch(increaseQuantity(product))}
          className="bg-gray-300 text-gray-700 py-1 px-2 md:py-2 md:px-4 rounded-md hover:bg-gray-400"
        >
          +
        </button>
        <button
          onClick={() => dispatch(removeFromCart(product))}
          className="bg-red-500 text-white py-1 px-2 md:py-2 md:px-4 rounded-md hover:bg-red-600"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartProduct;
    