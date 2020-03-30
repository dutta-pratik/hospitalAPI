/****************IMPORTING MONGOOSE*******************************/
const mongoose = require("mongoose");

/***************CREATING USER SCHEMA*****************************/
const reportSchema = mongoose.Schema({
    patient:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient"
    },
    doctor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor"
    },
    status: {
        type: String,
        required: true
    }

},{
    timestamps: true
});


/******************MAKING MODEL*********************************/
const Report = mongoose.model("Report", reportSchema);

/*****************EXPORTING MODEL*******************************/
module.exports = Report;