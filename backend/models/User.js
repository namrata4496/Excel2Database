const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    mobile:{
        type:Number
    }
});
module.exports = mongoose.model('User',UserSchema);