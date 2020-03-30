/****************IMPORTING PACKAGE*******************************/
const express = require("express");

/****************USING ROUTER************************************/
const router = express.Router();

/**************IMPORTING CONTROLLER******************************/
const reportController = require("../controller/report_controller");

/**********MAKING ROUTE FOR REPORT BY REPORTS*******************/
router.get("/:status", reportController.reportsByStatus);


/*****************EXPORTING ROUTER*******************************/
module.exports = router;