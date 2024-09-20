import express from "express";
import multer from "multer";
import AWS from "aws-sdk";
import multerS3 from "multer-s3";
import {
  createCategory,
  deleteCateogry,
  getCategories,
  getSingleCategory,
  updateCategory,
} from "../controllers/categoryController.js";
import { isAdmin, requireSignin } from "../middlewares/authMiddleware.js";

const router = express.Router();

const s3 = new AWS.S3();

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID, // Use environment variables
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "trek.fashions.img-data",
    acl: "public-read", // You can change ACL as per your requirement
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      // Construct a unique file name
      cb(null, `Categories/${Date.now().toString()}_${file.originalname}`);
    },
  }),
});

router.post(
  "/create-category",
  requireSignin,
  isAdmin,
  upload.single("image"),
  createCategory
);
router.put(
  "/update-category/:id",
  requireSignin,
  isAdmin,
  upload.single("image"),
  updateCategory
);
router.delete("/delete-category/:id", requireSignin, isAdmin, deleteCateogry);
router.get("/get-category/:id", getSingleCategory);
router.get("/get-all-categories", getCategories);

export default router;
