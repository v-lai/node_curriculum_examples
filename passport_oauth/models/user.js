var mongoose = require("mongoose");
var findOrCreate = require('mongoose-findorcreate');
var bcrypt = require("bcrypt");

var userSchema = new mongoose.Schema({
    facebook_id: {
        type: String,
        // passwords do not have to be unique, but we really need them to exist
        required: true
    }
});

userSchema.plugin(findOrCreate); // give us a findOrCreate method!


var User = mongoose.model('User', userSchema);
module.exports = User;