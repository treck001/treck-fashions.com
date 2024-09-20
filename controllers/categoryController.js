import slugify from "slugify";
import categoryModel from "../models/categoryModel.js";

import AWS from "aws-sdk";

// Initialize S3 instance
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

export const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const file = req.file;

    const image = file.location;

    const existingCat = await categoryModel.findOne({ name });

    if (existingCat) {
      return res.status(400).send({
        success: false,
        message: "category already exists",
      });
    }

    const newCategory = new categoryModel({
      name,
      image,
      slug: slugify(name),
    });

    await newCategory.save();

    return res.status(201).send({
      success: true,
      message: "Category created successfully",
      newCategory,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Internal server error",
    });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const { name } = req.body;

    const file = req.file;

    const image = file.location;
    const { id } = req.params;

    const category = await categoryModel.findByIdAndUpdate(id, {
      name,
      image,
      slug: slugify(name),
    });

    res.status(200).send({
      success: true,
      message: "Category updated successfully",
      category,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Internal server error",
    });
  }
};

export const deleteCateogry = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await categoryModel.findById(id);

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    const imageKey = category.image.split("/").slice(-2).join("/");

    await categoryModel.findByIdAndDelete(id);

    // * Delete the image from S3
    const params = {
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: imageKey, // * The path of the image in S3 (e.g., Categories/123456_image.jpg)
    };

    s3.deleteObject(params, (err, data) => {
      if (err) {
        console.log("Error deleting image from S3:", err);
      } else {
        console.log("Successfully deleted image from S3:", data);
      }
    });

    return res.status(200).send({
      success: true,
      message: "Successfully the Category is deleted",
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      meesage: "Internal server error",
    });
  }
};

export const getSingleCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await categoryModel.findById(id);

    if (!category) {
      return res.status(200).send({
        message: "Category Not found",
      });
    }

    return res.status(200).send({
      success: true,
      category,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const getCategories = async (req, res) => {
  try {
    const categories = await categoryModel.find({});

    return res.status(200).send({
      success: true,
      categories,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Internal server error",
    });
  }
};
