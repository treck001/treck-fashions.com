import React from "react";

const CheckoutProduct = ({ product }) => {
  return (
    <>
      <div className="flex flex-col rounded-lg bg-white sm:flex-row">
        <img
          className="m-2 h-24 w-28 rounded-md border object-cover object-center"
          src={`${product.image[0]}`}
          alt
        />
        <div className="flex w-full flex-col px-4 py-4">
          <span className="font-semibold">
            {product.name} - selected variey
          </span>
          <span className="float-right text-gray-400">{product.price}</span>
          <p className="mt-auto text-lg font-bold">{product.price}</p>
        </div>
      </div>
    </>
  );
};

export default CheckoutProduct;
