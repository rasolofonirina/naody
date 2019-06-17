const Joi = require('joi');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', userSchema);

function validateUser(user) {
    const schema = {
        username: Joi.string().min(4).max(20).required(),
        password: Joi.required(),
        firstName: Joi.string().min(2).required(),
        lastName: Joi.string().min(2).required() 
    };
    return Joi.validate(user, schema);
};

exports.User = User;
exports.validateUser = validateUser;
