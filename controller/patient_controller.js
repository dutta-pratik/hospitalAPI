/****************IMPORTING MODELS*******************************/
const Patient = require("../models/patients");
const Report = require("../models/reports");

/**********EXPORTING FUNCTION FOR createReport ROUTE******************/
module.exports.createReport = async function(req, res){
    let patientId = req.params.id;
    let patient = await Patient.findById({_id: patientId});
    if(patient){
        await Report.create({
            patient: patientId,
            doctor: req.user.id,
            status: req.body.status
        }, function(err, report){
            if(err){console.log("Error in creating Reports", err); return;}
            return res.json({
                message: "Report Created",
                Report: report
            });
        });

    }else{
        return res.json({
            message: "Patient Not Exists"
        });
    }
}

/**********EXPORTING FUNCTION FOR allReport ROUTE******************/
module.exports.allReport = async function(req, res){
    let patientId = req.params.id;
    let patient = await Patient.findById({_id: patientId}).sort('-createdAt');
    if(patient){
        Report.find({patient: patientId}, function(err, reports){
            if(err){console.log("Error in Fetching Reports", err); return;}
            return res.json({
                message: "All Reports",
                Reports: reports
            });
        });
    }else{
        return res.json({
            message: "Patient Not Exists"
        });
    }
}