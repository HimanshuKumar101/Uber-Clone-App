const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blackListTokenModel = require('../models/blackListToken.model');
const captainModel = require('../models/captain.model');


// user authentication middleware
//this middleware is use to check if the user is authenticated or not 
module.exports.authUser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];   //get the token from the cookie or the header

    if (!token) {      //if the token is not found, return an error
        return res.status(401).json({ message: 'Unauthorized' });
    }

    
    //check if the token is blacklisted or not 
    const isBlacklisted = await blackListTokenModel.findOne({ token: token });
    
    //if the token is blacklisted, return an error 
    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
   

    //verify the token and get the user id from the token
    //if the token is valid, get the user id from the token and find the user in the databse
    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET);  //verify the token using the secret key
        const user = await userModel.findById(decoded._id)          //find the user in the database using the id from the token

        req.user = user;    //set the user in the request object so that it can be used in the next middleware or controller

        return next();    //call the next middleware or controller

    } catch (err) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
}


//captain authentication middleware 

//this middleware is use to check if the captain is authenticated or not 
module.exports.authCaptain = async (req, res, next) => {    
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ]; //get the token from the cookie or the header


    if (!token) {    //if the token is not found, return an error
        return res.status(401).json({ message: 'Unauthorized' });
    }
    
    //check if the token is blacklisted or not 
    const isBlacklisted = await blackListTokenModel.findOne({ token: token });


    
    //if the token is blacklisted, return an error
    if (isBlacklisted) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    
    //verify the token and get the captain id form the token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id)
        req.captain = captain;

        return next()  //
    } catch (err) {
        console.log(err);

        res.status(401).json({ message: 'Unauthorized' });
    }
}