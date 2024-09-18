import React, { useState } from "react";

const FilterChange = ({onFilterChange}) => {
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const handleFilterUpdate = () => {
    onFilterChange({ category, price });
  };

  return (
    <div className="w-full lg:w-1/4 bg-white p-4 rounded-lg shadow-lg mb-6 lg:mb-0">
      <h2 className="text-lg font-bold mb-4">Filters</h2>

      {/* Category Filter */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Category</label>
        <select
          className="w-full p-2 border rounded-md"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            handleFilterUpdate();
          }}
        >
          <option value="">All</option>
          <option value="Electronics">Electronics</option>
          <option value="Clothing">Clothing</option>
          <option value="Accessories">Accessories</option>
          <option value="Home">Home</option>
        </select>
      </div>

      {/* Price Filter */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Max Price</label>
        <input
          type="number"
          className="w-full p-2 border rounded-md"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
            handleFilterUpdate();
          }}
          placeholder="Enter max price"
        />
      </div>
    </div>
  );
};

export default FilterChange;
