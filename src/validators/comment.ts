import Joi from "joi";

export const createCommentBodySchema = Joi.object({
  fullName: Joi.string().required().messages({
    "string.base": "fullName must be of type string!",
    "any.required": "fullName field is required!",
  }),
  text: Joi.string().required().messages({
    "string.base": "text must be of type string!",
    "any.required": "text field is required!",
  }),
  email: Joi.string().email().required().messages({
    "string.base": "email must be of type string!",
    "any.required": "email field is required!",
    "string.email": "email filed must be an email!",
  }),
  isActive: Joi.bool().messages({
    "bool.base": "is Active field must be of type boolean",
  }),
});

export const updateCommentBodySchema = Joi.object({
  fullName: Joi.string().messages({
    "string.base": "fullName must be of type string!",
  }),
  text: Joi.string().messages({
    "string.base": "text must be of type string!",
  }),
  email: Joi.string().email().messages({
    "string.base": "email must be of type string!",
    "string.email": "email filed must be an email!",
  }),
  isActive: Joi.bool().messages({
    "bool.base": "is Active field must be of type boolean",
  }),
});

