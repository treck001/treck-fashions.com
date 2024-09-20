import mongoose from "mongoose";

// Define the Color Schema
const colorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  cimages: {
    type: String, // Optional: URL to the product image with that color
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  stock: {
    type: Number, // Stock available for this specific color
    default: 0,
  },
});

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  // * we are adding the product into the category
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },

  colors: [colorSchema],

  images: {
    type: Array,
    default: [],
  },
  returnDays: {
    type: Number,
    default: 0,
  },
  deliveryDays: {
    type: Number,
    default: 0,
  },
  deliveryCharge: {
    type: Number,
    default: 0,
  },

  replacementDays: {
    type: Number,
    default: 0,
  },

  //* This attribute for admin purpose
  stock: {
    type: Number,
    default: 0,
  },

  // * This Attribute for user purpose
  qty: {
    type: Number,
    default: 0,
  },

  
});


export default mongoose.model("Product", productSchema);