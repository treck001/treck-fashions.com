import React, { useState } from "react";
import ProductList from "../Components/Products/ProductList";
import { Products } from "../Components/data";
import FilterChange from "../Components/FilterChange";

const Testing = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const [filteredProducts, setFilteredProducts] = useState(Products);
  const handleFilterChange = (filters) => {
    const filtered = Products.filter((product) => {
      return (
        (!filters.category || product.category === filters.category) &&
        (!filters.price || product.price <= filters.price)
      );
    });
    setFilteredProducts(filtered);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="container mx-auto flex flex-col lg:flex-row">
          <FilterChange onFilterChange={handleFilterChange} />
          <ProductList products={filteredProducts} />
        </div>
      </div>
    </>
  );
};

export default Testing;
