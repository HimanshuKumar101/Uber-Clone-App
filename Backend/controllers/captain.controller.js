const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.service');
const blackListTokenModel = require('../models/blackListToken.model'); //to prevent the user from using the token again
const { validationResult } = require('express-validator');


module.exports.registerCaptain = async (req, res, next) => {  //register a new captain

    //check if the request is valid or not
    const errors = validationResult(req);  //check if there are any errors in the request
    if (!errors.isEmpty()) {                                  
        return res.status(400).json({ errors: errors.array() });   
    }

    const { fullname, email, password, vehicle } = req.body;    //get the data from the request body

    const isCaptainAlreadyExist = await captainModel.findOne({ email });   //check if the captain already exists in the database

    if (isCaptainAlreadyExist) {                                //check if the captain already exists in the database
        return res.status(400).json({ message: 'Captain already exist' });   //
    }


    const hashedPassword = await captainModel.hashPassword(password);    //hash the password

    const captain = await captainService.createCaptain({      // creat e new captain
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword,
        color: vehicle.color,
        plate: vehicle.plate,
        capacity: vehicle.capacity,
        vehicleType: vehicle.vehicleType
    });

    const token = captain.generateAuthToken();                     //generate a token for the captain

    res.status(201).json({ token, captain });

}

module.exports.loginCaptain = async (req, res, next) => {           //login a captain
    const errors = validationResult(req);                                     //check if there are any errors in the request
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;                       //get the data from the request body

    const captain = await captainModel.findOne({ email }).select('+password');         //find the captain in the database 

    if (!captain) {
        return res.status(401).json({ message: 'Invalid email or password' });       //if the captain is not found, return an error
    }

    const isMatch = await captain.comparePassword(password);       //compare the password with the hashed password in the databse

    if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });      //if the password is not matched, return an error
    }

    const token = captain.generateAuthToken();                           //generate a token for the captain

    res.cookie('token', token);                                 //set the token in the cookie

    res.status(200).json({ token, captain });
}

module.exports.getCaptainProfile = async (req, res, next) => {             //get the captain profile
    res.status(200).json({ captain: req.captain });                    //return the captain profile by using the token 
}

module.exports.logoutCaptain = async (req, res, next) => {                 //logout a captain
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];   //get the token from the cookie or the header

    await blackListTokenModel.create({ token }); //the blacklisted token will be used to prevent the user from using the token again

    res.clearCookie('token');                //clear the cookie

    res.status(200).json({ message: 'Logout successfully' });
}