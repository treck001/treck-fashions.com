import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "../helpers/authEncryption.js";
import jwt from "jsonwebtoken";

export const testcontroller = (req, res) => {
  try {
  } catch (error) {}
};

// * this method is printing all the users for admin
export const getUsers = async (req, res) => {
  try {
    const letUsers = await userModel.find();
    return res.status(200).json(letUsers);
  } catch (error) {
    console.log(error);
    return res.status(400).send({ success: false, message: error.message });
  }
};

// * Register
export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, emailPassword } = req.body;

    // Check if the email or phone number already exists
    if (email) {
      const user = await userModel.findOne({ email });
      if (user) {
        return res.status(200).send({
          success: false,
          message: "This email is already registered",
        });
      }
    }
    if (phone) {
      const user = await userModel.findOne({ phone });
      if (user) {
        return res.status(200).send({
          success: false,
          message: "Phone already exits",
        });
      }
    }

    const user = new userModel({
      name,
      email,
      phone,
    });

    if (!password) {
      const hashedEmailPass = await hashPassword(emailPassword);
      user.emailPassword = hashedEmailPass;
    }
    if (!emailPassword) {
      const hashedPass = await hashPassword(password);
      user.password = hashedPass;
    }

    await user.save();

    // * creating token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(201).send({
      success: true,
      message: "Registered Successfully",
      _id: user._id,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
        role: user.role,
        location: user.location,
        cart: user.cart,
      },
      token,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in registration",
    });
  }
};

// * Login
export const loginController = async (req, res) => {
  try {
    const { email, emailPassword, phone, password } = req.body;

    let user;

    if (email) {
      user = await userModel.findOne({ email });
    } else if (phone) {
      user = await userModel.findOne({ phone });
    }

    if (!user) {
      return res.status(400).send({
        success: false,
        message: "User not found",
      });
    }

    if (emailPassword) {
      const match = await comparePassword(emailPassword, user.emailPassword);
      if (!match) {
        return res.status(400).send({ message: "Wrong Password" });
      }
    } else {
      const match = await comparePassword(password, user.password);
      if (!match) {
        return res.status(400).send({ message: "Wrong Password" });
      }
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    return res.status(200).send({
      success: true,
      message: "Login Successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        role: user.role,
        address: "KA India",
        altPhone: user.altPhone,
        location: user.location,
        cart: user.cart,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// * This function will update the user data
export const updateProfileController = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      emailPassword,
      phone,
      address,
      altPhone,
      cordinates,
    } = req.body;

    const user = await userModel.findById(req.user._id);

    if (name) {
      user.name = name;
    }
    if (email) {
      let existingUser = await userModel.findOne({ email });

      if (
        existingUser &&
        existingUser._id.toString() !== req.user._id.toString()
      ) {
        return res.status(400).send({
          success: false,
          message: "This email is already registered",
        });
      } else {
        user.email = email;
      }
    }

    if (emailPassword) {
      const hashedEmailPass = await hashPassword(emailPassword);
      user.emailPassword = hashedEmailPass;
    }
    if (address) {
      user.address = address;
    }
    if (phone) {
      const existingUser = await userModel.findOne({ phone });
      if (
        existingUser &&
        existingUser._id.toString() !== req.user._id.toString()
      ) {
        return res.status(400).send({
          success: false,
          message: "This phone number is already registered",
        });
      } else {
        user.phone = phone;
      }
    }

    if (cordinates) {
      user.location.latitude = cordinates.latitude;
      user.location.longitude = cordinates.longitude;
    }

    if (altPhone) {
      user.altPhone = altPhone;
    }

    await user.save();

    res.status(200).send({
      success: true,
      message: "Profile Updated Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "internal server error",
    });
  }
};

// * This function will get all the users for admin purpose
export const getUsersListController = async (req, res) => {
  try {
    const users = await userModel.find();

    res.status(200).send({
      success: true,
      count: users.length,
      users,
    });
  } catch (error) {
    // console.log(error);
    res.status(500).send({
      success: false,
      message: "internal server error",
    });
  }
};
