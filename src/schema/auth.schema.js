import Joi from "joi";


export const signInSchema = Joi.object({
    email: Joi.string().email().min(3).required(),
    password: Joi.string().min(3).required(),
})

export const signUpSchema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().min(3).required(),
    password: Joi.string().min(3).required(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required()
})