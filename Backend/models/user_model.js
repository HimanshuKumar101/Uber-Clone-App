const mongoose = require('mongoose');
const bcrypt = require('bcrypt');     //for hashing the password
const jwt = require('jsonwebtoken');  //user authentication 

const userSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required: true,
            minLength:[3,'First name must be at least 3 characters long'],
        },
        lastname:{
            type: String,
            minLength:[3,'last name must be at least 3 characters long'],
        }
    },
    email:{
        type:String,
        required:true,
        unique: true,
        minLength: [5,'email must be at least 5 character'],
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    
    //socket for live tracking 
    socketId: {
        type:String,
    },

})


/* jwt.sign(payload, secretkey )
payload: {_id: this._id} this means that the generated jwt will include the
_id of the user.

process.env.jwt_secret it ensures that only your server can verify and decode the token.
*/
userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id: this._id},process.env.JWT_SECRET);
    return token;
}


/*
password: the plain text password entered by the user (during login)
this.password: the hashed password stored in the database
bcrypt.compare();
compare the two passwards securely returns true if they watch, otherwise false
*/ 
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password,this.password);
}


/* bcrypt.hash() 
applies hashing + salting ( random data added to the hash for extra security )
returns a hashed password that can be safely stored in the database.
*/ 

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
    
}


const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
