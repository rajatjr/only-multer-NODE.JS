const Joi = require('joi');
const { joiPasswordExtendCore } = require('joi-password');
const JoiPassword = Joi.extend(joiPasswordExtendCore);

const userSchema = Joi.object({
    username: Joi.string().min(3).required(),
    firstname: Joi.string().min(3).required(),
    lastname: Joi.string().min(3).required(),
    // phone: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
    email: Joi.string().email().required(),
    password: JoiPassword.string().min(8).max(15).minOfSpecialCharacters(1).minOfLowercase(1).minOfUppercase(1).minOfNumeric(1).noWhiteSpaces()
        .required(),
});

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(5).required(),
});

module.exports = { userSchema, loginSchema };