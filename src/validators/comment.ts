import Joi from "joi";

export const commentBodySchema = Joi.object({
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
    "string.email" : "email filed must be an email!"
  }),
});

// export const commentParamsSchema = Joi.object({
//     id:Jo
// })

