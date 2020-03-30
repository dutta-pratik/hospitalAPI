/****************IMPORTING PACKAGE*******************************/
const Patient = require("../models/patients");

/**********EXPORTING FUNCTION FOR Patient-Register ROUTE******************/
module.exports.Register = async function(req, res){
    console.log(req.body.phone);
    let patient = await Patient.findOne({phone: req.body.phone});
    if(patient){
        return res.json({
            message: "Patient Already Exists",
            Patient_data: patient
        });
    }else{
        Patient.create({
            phone: req.body.phone
        }, function(err, patient){
            if(err){console.log("Error in creating Patient", err); return;}
            return res.json({
                message: "Patient created",
                Patient_data: patient
            })
        });
    }
}