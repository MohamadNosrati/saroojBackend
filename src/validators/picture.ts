import Joi from "joi";

export const pictureSchema = Joi.object({
  images: Joi.array().required().messages({
    "array.base": "images must be of type string!",
    "any.required": "images field is required!",
  }),
});