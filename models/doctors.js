/****************IMPORTING MONGOOSE*******************************/
const mongoose = require("mongoose");

/***************CREATING USER SCHEMA*****************************/
const doctorSchema = mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
},{
    timestamps: true
});


/******************MAKING MODEL*********************************/
const Doctor = mongoose.model("Doctor", doctorSchema);

/*****************EXPORTING MODEL*******************************/
module.exports = Doctor;