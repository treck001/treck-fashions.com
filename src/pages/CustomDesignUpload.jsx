import React, { useState } from "react";

const CustomDesignUpload = () => {
  const [image, setImage] = useState(null);
  const [description, setDescription] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Preview the selected image
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., upload the image and description)
    console.log("Image:", image);
    console.log("Description:", description);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4 text-center">Upload Your Design</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        
        {/* Image Upload */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="photo-upload">
            Upload Photo
          </label>
          <input
            type="file"
            accept="image/*"
            id="photo-upload"
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
            onChange={handleImageChange}
          />
        </div>

        {/* Image Preview */}
        {image && (
          <div className="mb-4">
            <img
              src={image}
              alt="Preview"
              className="w-full h-auto rounded-md"
            />
          </div>
        )}

        {/* Description Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            rows="4"
            className="block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
            placeholder="Describe your design..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Upload Design
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomDesignUpload;
