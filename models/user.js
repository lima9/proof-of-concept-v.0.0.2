var mongoose = require('mongoose');
var mongooseUniqueValidator = require('mongoose-unique-validator');
var Schema = mongoose.Schema;


var userSchema = new Schema({
    name: {type: String, required: true},
    role: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true}
});

userSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User', userSchema);