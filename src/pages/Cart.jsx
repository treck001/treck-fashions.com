import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartProduct from "../Components/Products/CartProduct";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cart);

  const [Total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cartItems.reduce((acc, item) => acc + Number(item.price), 0));
  }, [cartItems]);

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl text-gray-800  text-center font-bold mb-4">
        Your Cart
      </h1>
      <div className="bg-white rounded-lg overflow-hidden flex flex-col md:flex-row">
        {/* Cart Items */}
        <div className="p-1 md:p-0 flex-1">
          <div className="flex flex-col space-y-4">
            {/* Render cart items */}
            {cartItems.map((item) => (
              <CartProduct product={item} key={item.id} />
            ))}
          </div>
        </div>

        {/* Cart Summary */}
        <div className="w-full md:w-1/5 bg-gray-50 py-6 px-6 border-t border-gray-200">
          <div className="flex justify-between mb-4">
            <span className="text-lg font-semibold">Item Price:</span>
            <span className="text-lg font-semibold">₹{Total}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-lg font-semibold">Shipping:</span>
            <span className="text-lg font-semibold">
              {cartItems.length > 0 ? "₹100" : "₹0"}
            </span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="text-xl font-bold">Total:</span>
            <span className="text-xl font-bold">₹{Total + 100}</span>
          </div>
          <div className="flex justify-center">
            <button className="bg-[#ff4cb5] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              <Link to="/checkout" className="block w-full h-full">
                Checkout
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
