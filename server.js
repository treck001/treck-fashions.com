
import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config('.env');


// * Routes
import authRoutes from "./routes/auth.js";
import productRoutes from "./routes/productRoutes.js";
import categoryRoutes from './routes/categoryRoutes.js'

import { connectDB } from "./db/connectDB.js";


const app = express();


const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category",categoryRoutes)
app.use("/api/v1/products", productRoutes);

app.get("/hello", (req, res) => {
  res.send("Welcome to trek Fashions Backend");
});

app.listen(PORT, () => {
  console.log("server running on port 8080");
});


console.log("the bucket name = ",process.env.AWS_S3_BUCKET_NAME)
// * connecting the database
connectDB();
