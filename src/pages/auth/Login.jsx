import React, { useState } from "react";
import Backbutton from "../../Components/Backbutton";
import { Link } from "react-router-dom";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false); // To toggle between login and signup forms

  return (
    <>
      <Backbutton path="/" />

      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800">Welcome Back</h1>
      <h5 className="text-xl md:text-2xl font-bold text-center text-gray-800">We are happy to see you again</h5>
      <div className="d-flex justify-content-center align-items-center mt-[10vh]">
        <div className="d-flex justify-content-center align-items-center mx-auto shadow-lg rounded-lg p-8 md:max-w-md w-fit">
          <div id="login-form" className="container">
            <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6">
              Log In
            </h2>

            <form>
              <input
                type="email"
                placeholder="Email"
                className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <button
                type="submit"
                className="w-full bg-[#ff4cb5] text-white py-2 md:py-3 rounded-lg font-semibold hover:opacity-90 transition duration-200"
              >
                Log In
              </button>
              <p className="text-center text-[#ff4cb5] mt-6">
                <Link
                  href="#"
                  className="text-[#ff4cb5] hover:underline"
                  onClick={() => setIsSignup(false)}
                >
                  Forgot Password?
                </Link>
              </p>
             <Link to = '/signup'>
             <p className="text-center text-gray-600 mt-6">
                Don’t have an account?{" "}
                <span
                  className="text-[#ff4cb5] hover:underline cursor-pointer"
                  
                >
                  Sign Up
                </span>
              </p>
             </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
