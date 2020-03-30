/****************IMPORTING MONGOOSE*******************************/
const mongoose = require("mongoose");

/***************CREATING USER SCHEMA*****************************/
const patientSchema = mongoose.Schema({
    phone:{
        type: String,
        required: true
    }
},{
    timestamps: true
});


/******************MAKING MODEL*********************************/
const Patient = mongoose.model("Patient", patientSchema);

/*****************EXPORTING MODEL*******************************/
module.exports = Patient;