import React, { useState, useEffect } from "react";

import {Link} from 'react-router-dom'

// Mock function to simulate fetching images
const fetchMoreImages = async (startIndex, count) => {
  const images = [];
  for (let i = startIndex; i < startIndex + count; i++) {
    images.push({
      url: `https://via.placeholder.com/300x200?text=Image+${i + 1}`,
      code: `IMG-${i + 1}`,
      price: `$${(i + 1) * 10}` // Example pricing
    });
  }
  return images;
};

const CustomDesign = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // State for selected image

  // Load more images
  const loadMoreImages = async () => {
    setLoading(true);
    const newImages = await fetchMoreImages(images.length, 8); // Fetch 8 more images
    setImages([...images, ...newImages]);
    setLoading(false);
  };

  // Load initial images
  useEffect(() => {
    loadMoreImages();
  }, []);

  // Close popup
  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">More Designs</h1>
      <div className="mb-4">
      <h1 className="text-2xl font-bold mb-4">If you have custom design upload it here, we'll get in touch </h1>
      <Link to = '/upload-custom-design'>
      <button className="btn bg-[#007bff] text-white focus:outline-none">Upload</button>

      </Link>
      </div>
      <div className="grid gap-4 grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-md cursor-pointer"
            onClick={() => setSelectedImage(image)} // Open popup on mobile
          >
            <img
              src={image.url}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover transition-opacity duration-300 ease-in-out"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out p-2">
              <div className="text-center">
                <div className="font-bold">{image.code}</div>
                <div>{image.price}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : (
          <button
            onClick={loadMoreImages}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            See More
          </button>
        )}
      </div>

      {/* Popup for mobile */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg max-w-sm w-full">
            <img
              src={selectedImage.url}
              alt={`Selected Image`}
              className="w-full h-auto mb-2"
            />
            <div className="text-center">
              <div className="font-bold">{selectedImage.code}</div>
              <div>{selectedImage.price}</div>
            </div>
            <button
              onClick={closePopup}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDesign;
