import express from 'express';
import { isAdmin, requireSignin } from '../middlewares/authMiddleware.js';
import { createProductController, deleteProductController, getProducts, getSingleProduct, updateProductController } from '../controllers/productController.js';

const router = express.Router();


router.post('/create-product',requireSignin,isAdmin,createProductController)
router.put('/update-product/:id',requireSignin,isAdmin,updateProductController)
router.delete('/delete-product/:id',requireSignin,isAdmin,deleteProductController)
router.get('/get-all-products',getProducts);
router.get('/get-single-product/:id',getSingleProduct)


export default router;