/****************IMPORTING PACKAGE*******************************/
const express = require("express");

const passport = require("passport");
const passportJWT = require("passport-jwt");

/****************USING ROUTER************************************/
const router = express.Router();

/**************IMPORTING CONTROLLERS*****************************/
const registerPatientController = require("../controller/register_patient_controller");

/**********************MAKING ROUTES*****************************/
router.use("/doctors", require("./doctor"));
router.use("/patients", require("./patients"));
router.use("/reports", require("./reports"));

router.post("/register_patient", passport.authenticate('jwt', {session:false}), registerPatientController.Register);

/*****************EXPORTING ROUTER*******************************/
module.exports = router;