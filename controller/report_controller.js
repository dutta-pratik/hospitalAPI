/****************IMPORTING PACKAGE*******************************/
const Report = require("../models/reports");

/**********EXPORTING FUNCTION FOR reportsByStatus ROUTE******************/
module.exports.reportsByStatus = async function(req, res){
    let givenStatus = req.params.status;
    await Report.find({status: givenStatus}, function(err, report){
        if(err){console.log("Error in fetching Reports, ",err); return;}
        return res.json({
            Reports: report
        });
    });
}