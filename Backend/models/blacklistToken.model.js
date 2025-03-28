const mongoose = require("mongoose");


// this model is used to store the blacklisted tokens in the database
// this is used to prevent the user from using the token again after logging out 
const blacklistTokenSchema = new mongoose.Schema({
  token: { 
    type: String, 
    required: true,
    unique: true

},
  createdAt: { 
    type: Date, 
    default: Date.now, 
    expires: 86400 }, // 86400 seconds = 24 hours
});

const BlacklistToken = mongoose.model("BlacklistToken", blacklistTokenSchema);

module.exports = BlacklistToken;
