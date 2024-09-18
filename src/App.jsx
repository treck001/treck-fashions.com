import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./Components/Layout";
import Product_Details from "./Components/Products/Product_Details";
import Login from "./pages/auth/Login";
import Testing from "./pages/Testing";
import Signup from "./pages/auth/Signup";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import CustomDesign from "./pages/CustomDesign";
import CustomDesignUpload from "./pages/CustomDesignUpload";
import ProductGrid from "./pages/ProductGrid";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          <Route
            path="/product-details/:id"
            element={
              <Layout>
                <Product_Details />
              </Layout>
            }
          />

          {/* auth rotes for user mangement */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            path="/cart"
            element={
              <Layout>
                <Cart />
              </Layout>
            }
          />

          <Route 
          path = '/checkout'
          element = {
            <Layout>
              <Checkout />
            </Layout>
          }
          />

          <Route
          path = '/emb-designs'
          element= {
              <Layout>
                <CustomDesign/>
              </Layout>
          }
          />

          <Route 
          path = '/upload-custom-design'
          element = {
            <Layout>
              <CustomDesignUpload/>
            </Layout>
          }
          />

          <Route 
          path = '/all-products'
          element = {
            <Layout>
              <ProductGrid/>
            </Layout>
          }
          />
          
          <Route path="/testing" element={<Testing />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
