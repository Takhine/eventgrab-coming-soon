const passport = require('passport'); 
const JwtStrategy = require('passport-jwt').Strategy; 
const ExtractJwt = require('passport-jwt').ExtractJwt; 
const Admin = require('../models/admin.model'); 
const keys = require('./keys'); 

const opts = {}; 
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken(); 
opts.secretOrKey = keys.secretOrKey; 

passport.use('jwt-admin-rule', new JwtStrategy(opts, (jwt_payload, done) => {
    Admin.findById(jwt_payload.id)
        .then(admin => {
            if(admin){
                return done(null, admin); 
            }
            return done(null, false); 
        })
        .catch(err => console.log(err)); 
})); 




