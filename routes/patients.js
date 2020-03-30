/****************IMPORTING PACKAGE*******************************/
const express = require("express");
const passport = require("passport");
const passportJWT = require("passport-jwt");

/****************USING ROUTER************************************/
const router = express.Router();

/**************IMPORTING CONTROLLER******************************/
const patientController = require("../controller/patient_controller");

/************MAKING ROUTE FOR CREATE REPORT*****************************/
router.post("/:id/create_report", passport.authenticate('jwt', {session:false}), patientController.createReport);

/**************MAKING ROUTE FOR ALL_REPORTS*****************************/
router.get("/:id/all_reports", patientController.allReport);

/*****************EXPORTING ROUTER*******************************/
module.exports = router;
