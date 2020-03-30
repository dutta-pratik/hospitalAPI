/*****************IMPORTING PACKAGE*******************************/
const passport = require("passport");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

/*****************EXPORTING ROUTER*******************************/
const Doctors = require("../models/doctors");

/*****************KEY AND AUTH HEADERBEARER*******************************/
let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: "A23XWqes"
}

/****************USING PASSPORT JWT*********************************/
passport.use(new JWTStrategy(opts, function(jwtPayLoad, done){

    Doctors.findById(jwtPayLoad._id, function(err, doc){
        if(err){console.log("Error in finding user from JWT", err);}

        if(doc){
            return done(null, doc);
        }else{
            return done(null, false);
        }
    });

}));

/*****************EXPORTING PASSPORT*******************************/
module.exports = passport;
