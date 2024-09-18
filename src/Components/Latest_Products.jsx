import React from "react";
import Product_Card from "./Products/Product_Card";
import { Products } from "./data";
import ProductCarousel from "./Products/Product_Card";
import { Link } from "react-router-dom";

const Latest_Products = () => {

  return (
    <>
      <section
        className="shop_section layout_padding pt-[2vh] "
        style={{
          marginTop: "0px",
        }}
      >
        <div className="container">
          <div className="heading_container heading_center text-2xl sm:text-2xl ">
            <h2 className="sm:text-2xl text-2xl">Latest Products</h2>
          </div>
          <div className="row">
            <ProductCarousel products={Products} />
          </div>
          <div className="btn-box mt-0">

            <Link to = '/all-products'>
            <button className="mt-0">View All Products</button>

            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Latest_Products;
