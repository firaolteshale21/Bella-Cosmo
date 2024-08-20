const asyncHandler = require("express-async-handler");
const Admin = require("../models/Admin");
const generateToken = require("../utils/generateToken");
const User = require("../models/User");

// @desc    Register a new admin
// @route   POST /api/admin/register
// @access  Public
const registerAdmin = asyncHandler(async (req, res) => {
  const { name, phoneNumber, password } = req.body;

  const adminExists = await Admin.findOne({ phoneNumber });

  if (adminExists) {
    res.status(400);
    throw new Error("Admin already exists");
  }

  const admin = await Admin.create({
    name,
    phoneNumber,
    password,
  });

  if (admin) {
    res.status(201).json({
      success: true,
      message: "Admin registered successfully",
      data: {
        _id: admin._id,
        name: admin.name,
        phoneNumber: admin.phoneNumber,
        token: generateToken(admin._id),
      },
    });
  } else {
    res.status(400);
    throw new Error("Invalid admin data");
  }
});

// @desc    Authenticate admin & get token
// @route   POST /api/admin/login
// @access  Public
const loginAdmin = asyncHandler(async (req, res) => {
  const { phoneNumber, password } = req.body;

  const admin = await Admin.findOne({ phoneNumber });

  if (admin && (await admin.matchPassword(password))) {
    res.json({
      success: true,
      message: "Admin logged in successfully",
      data: {
        _id: admin._id,
        name: admin.name,
        phoneNumber: admin.phoneNumber,
        token: generateToken(admin._id),
      },
    });
  } else {
    res.status(401);
    throw new Error("Invalid phoneNumber or password");
  }
});

//function for admin to get the list of users
// @desc    Get list of users
// @route   GET /api/admin/users
// @access  Private/Admin
//a function to get the list of users from database

const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});

  res.json({
    success: true,
    count: users.length,
    data: users,
  });
});
module.exports = {
  registerAdmin,
  loginAdmin,
  getUsers,
};
