const Joi = require('joi');
const Schema = require('../../../shared/schemas');

const accountSchema = {
    createAccountSchema: Joi.object({
        first_name: Joi.string().required().trim().label('Firstname'),
        last_name: Joi.string().required().trim().label('Lastname'),
        email: Schema.emailSchema.required().label('Email'),
        phone: Joi.string().required().label('Password'),
        password: Joi.string().required().label('Password'),
        user_type: Joi.string().required().label('Password'),
        state: Joi.string().required().trim().label('Country'),
        country: Joi.string().required().trim().label('Country'),
    }),
    // accountVerification: Joi.object({
    //     email: emailSchema.required().label('email'),
    //     token: Joi.string().required().trim().label('token'),
    // }),
};

module.exports = accountSchema;