/****************IMPORTING PACKAGE/MODELS*************************/
const Doctor = require("../models/doctors");
const jwt = require("jsonwebtoken");

/**********EXPORTING FUNCTION FOR Register ROUTE******************/
module.exports.Register = async function(req, res){
    try{

        let doc = await Doctor.findOne({username: req.body.username});
        if(doc){
            return res.json({
                message: "Username Already Exists"
            });
        }else{
            Doctor.create(req.body, function(err, doc){
                if(err){console.log("Error in creating Doc", err); return;}
                return res.json(200,{
                    message: "Doctor Registered",
                    doctor: req.body
                    
                });
            });
        }

    }catch(err){
        console.log(err);
    }
}


/**********EXPORTING FUNCTION FOR login ROUTE******************/
module.exports.Login = async function(req, res){
    try
    {
        await Doctor.findOne({username: req.body.username}, function(err, doc) {
            if(err){
                return res.status(422).json({
                    message: "Invalid userame or password"
                });
            }

            if(doc && req.body.password === doc.password){
                return res.status(200).json({
                    message: "Login Successful",
                    data:{
                        token: jwt.sign(doc.toJSON(), "A23XWqes", {expiresIn: "10000000"})
                    }
                });
            }else{
                return res.status(422).json({
                    message: "Invalid username or password"
                });
            }   
        });
    }catch(err){
        return res.json(500, {
            message: "Internal Sever Error"
        });
    }
}