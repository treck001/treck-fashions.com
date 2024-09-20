import express from "express";
import {
  getUsers,
  loginController,
  registerController,
} from "../controllers/authController.js";
import { isAdmin, requireSignin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", registerController);

router.post("/login", loginController);

router.get("/getusers", requireSignin, isAdmin, getUsers);



// * this routes is for checking if user role and navigating to them accordingly.

router.get('/userAuth',requireSignin,(req,res) =>{
  res.status(200).send({
    ok:true
  })
})

router.get('/adminAuth',requireSignin,isAdmin,(req,res) =>{
  res.status(200).send({
    ok:true
  })
})
export default router;
