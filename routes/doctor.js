/****************IMPORTING PACKAGE*******************************/
const express = require("express");
const passport = require("passport");
const passportJWT = require("passport-jwt");

/****************USING ROUTER************************************/
const router = express.Router();

/**************IMPORTING CONTROLLERS*****************************/
const doctorController = require("../controller/doctor_controller");

/**********************MAKING ROUTES*****************************/
router.post("/register", doctorController.Register);
router.post("/login", doctorController.Login);

/*****************EXPORTING ROUTER*******************************/
module.exports = router;