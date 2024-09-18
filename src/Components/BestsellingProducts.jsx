import React from 'react'
import ProductCarousel from './Products/Product_Card'
import { Products } from "./data";
import { Link } from 'react-router-dom';


const BestsellingProducts = () => {
  return (
    <>
    <section
        className="shop_section layout_padding pt-[2vh] "
        style={{
          marginTop: "0px",
        }}
      >
        <div className="container bg-[#f5f5f5]">
          <div className="heading_container heading_center text-2xl sm:text-2xl ">
            <h2 className="sm:text-2xl text-2xl">Best Selling Products</h2>
          </div>
          <div className="row">
            <ProductCarousel products={Products} />
          </div>
          <div className="btn-box mt-0">

            <Link to = '/all-products'>
            <button className="mt-0 mb-2">Shop Now</button>

            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default BestsellingProducts 