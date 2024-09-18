import React from "react";
import { Product_Card } from "./Product_Card";

const ProductList = ({ products }) => {
  console.log("The Product list page : ", products);    
  return (
    <>
      <div className="w-full lg:w-3/4 lg:pl-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.length > 0 ? (
            products.map((product) => (
              <Product_Card key={product.id} item={product} />
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductList;
