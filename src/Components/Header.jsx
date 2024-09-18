import React, { useState } from "react";
import { IoBagOutline } from "react-icons/io5";
import { Link, useSearchParams } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa6";
import { useSelector } from "react-redux";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      {/* Desktop Header */}
      <nav
        className="bg-white text-black border-b border-gray-200 lg:px-20 px-4 flex items-center justify-between"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 25,
          backgroundColor: "white",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center py-4">
          <img
            src="https://treckfashionsimagedata.s3.ap-south-1.amazonaws.com/Logo_01.jpg"
            alt="Trek-fashions"
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="font-bold text-black text-lg ml-2">
            Trek-Fashions
          </span>
        </Link>

        {/* Navigation menu for larger screens */}
        <ul className="hidden md:flex items-center space-x-6">
          <li>
            <Link
              to="/"
              className="font-medium text-black hover:text-blue-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/all-products"
              className="font-medium text-black hover:text-blue-500"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="font-medium text-black hover:text-blue-500"
            >
              Order Tracking
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="font-medium text-black hover:text-blue-500"
            >
              About Us
            </Link>
          </li>
        </ul>

        {/* Search bar */}
        <form className="hidden md:flex flex-grow max-w-md mx-4">
          <div className="relative w-full">
            <input
              type="search"
              className="block w-full border border-gray-300 rounded-full py-2 pl-10 pr-3 leading-5 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              placeholder="Search"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.716 14.966A7.25 7.25 0 1114.35 8.33a7.25 7.25 0 01-6.634 6.635zM15.5 9.75a5.75 5.75 0 10-11.5 0 5.75 5.75 0 0011.5 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </form>

        {/* User and Cart */}
        <div className="hidden md:flex items-center space-x-4">
          <span className="d-flex items-center font-medium text-black hover:text-blue-500 cursor-pointer">
            <Link to="/signup">
              <button className="bg-[#ff4cb5] hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none">
                Signup
              </button>
            </Link>
          </span>

          <Link to="/login">
            <span className="d-flex items-center font-medium text-black hover:text-blue-500 cursor-pointer">
              Login
            </span>
          </Link>
          <div className="relative">
            <span className="d-flex items-center font-medium text-black hover:text-blue-500 cursor-pointer">
              <FaRegHeart className="text-2xl mr-2" /> 
            </span>
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-[#ff4cb5] text-white rounded-full px-2 py-0.5 text-xs">
              0
            </span>
          </div>

          <div className="relative">
            <Link to = "/cart">
            <span className="d-flex items-center font-medium text-black hover:text-blue-500 cursor-pointer">
              <IoBagOutline className="text-2xl mr-2" /> Cart
            </span>
            <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-[#ff4cb5] text-white rounded-full px-2 py-0.5 text-xs">
              {cartItems.length}
            </span>
            </Link>
          </div>
        </div>

        {/* Mobile navigation toggler */}
        <div className="md:hidden flex items-center">
          <button
            onClick={handleShowMenu}
            className="text-black p-2 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Header */}
      {showMenu && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full z-50 bg-white border-t border-gray-200 px-6 py-4">
          {/* Close button */}
          <div className="flex justify-end">
            <button onClick={handleShowMenu} className="text-black text-2xl">
              &times;
            </button>
          </div>

          {/* Search bar for mobile */}
          <div className="mt-4">
            <div className="relative w-full">
              <input
                type="search"
                className="block w-full border border-gray-300 rounded-full py-2 pl-10 pr-3 leading-5 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                placeholder="Search"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.716 14.966A7.25 7.25 0 1114.35 8.33a7.25 7.25 0 01-6.634 6.635zM15.5 9.75a5.75 5.75 0 10-11.5 0 5.75 5.75 0 0011.5 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          <ul className="flex flex-col space-y-4 mt-4">
            <li>
              <a
                href="/men"
                className="font-medium text-black hover:text-blue-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/women"
                className="font-medium text-black hover:text-blue-500"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="/home-living"
                className="font-medium text-black hover:text-blue-500"
              >
                Order Tracking
              </a>
            </li>
            <li>
              <a
                href="/offers"
                className="font-medium text-black hover:text-blue-500"
              >
                About Us
              </a>
            </li>
            <li>
              <span className="d-flex items-center font-medium text-black hover:text-blue-500 cursor-pointer">
                <Link to="/signup">
                  <button className="bg-[#ff4cb5] hover:bg-black text-white font-bold py-2 px-4 rounded">
                    Signup
                  </button>
                </Link>
              </span>
            </li>
            <li>
              <Link to="/login">
                <span className="d-flex items-center font-medium text-black hover:text-blue-500 cursor-pointer">
                  Login
                </span>
              </Link>
            </li>
            <li>
              <div className="relative">
                <span className="d-flex items-center font-medium text-black hover:text-blue-500 cursor-pointer">
                  <IoBagOutline className="text-2xl mr-2" /> Cart
                </span>
                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-[#ff4cb5] text-white rounded-full px-2 py-0.5 text-xs">
                  0
                </span>
              </div>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
