import Joi from "joi";

export const userSignupBody = Joi.object({
  email: Joi.string().email().required().messages({
    "string.base": "email field be an string",
    "any.required": "email field is required",
    "string.email": "email fields must be an email format",
  }),
  userName: Joi.string().min(4).max(40).required().messages({
    "string.base": "userName field be an string",
    "any.required": "userName field is required",
    "string.min": "user name minLenght 4 character!",
    "string.max": "user name maxLenght 40 character!",
  }),
  password: Joi.string().min(8).max(16).required().messages({
    "string.base": "password field be an string",
    "any.required": "password field is required",
    "string.min": "password minLenght 4 character!",
    "string.max": "password maxLenght 16 character!",
  }),
  confirmPassword: Joi.string().equal(Joi.ref("password")).required().messages({
    "any.only": "confirmPassword must be equal to password",
    "any.required": "confirmPasword is requreid!",
  }),
});

export const userSigninBody = Joi.object({
  email: Joi.string().email().required().messages({
    "string.base": "email field be an string",
    "any.required": "email field is required",
    "string.email": "email fields must be an email format",
  }),
  password: Joi.string().required().messages({
    "string.base": "password field be an string",
    "any.required": "password field is required",
  }),
});
