import Joi from "joi";

export const createSliderBodySchema = Joi.object({
  title: Joi.string().required().messages({
    "string.base": "title must be of type string!",
    "any.required": "title field is required!",
  }),
  link: Joi.string().required().messages({
    "string.base": "title must be of type string!",
    "any.required": "title field is required!",
  }),
  description: Joi.string().required().messages({
    "string.base": "description must be of type string!",
    "any.required": "description field is required!",
  }),
  pictureId: Joi.string().required().messages({
    "string.base": "pictureId must be of type string!",
    "any.required": "pictureId field is required!",
  }),
  mobilePictureId: Joi.string().required().messages({
    "string.base": "pictureId must be of type string!",
    "any.required": "pictureId field is required!",
  }),
  isActive: Joi.bool().messages({
    "bool.base": "is Active field must be of type boolean",
  }),
  alt: Joi.string().required().messages({
    "string.base": "alt must be of type string!",
    "any.required": "alt field is required!",
  }),
});

export const updateSliderBodySchema = Joi.object({
  title: Joi.string().messages({
    "string.base": "title must be of type string!",
  }),
  link: Joi.string().messages({
    "string.base": "title must be of type string!",
  }),
  description: Joi.string().messages({
    "string.base": "description must be of type string!",
  }),
  pictureId: Joi.string().messages({
    "string.base": "pictureId must be of type string!",
  }),
  mobilePictureId: Joi.string().messages({
    "string.base": "pictureId must be of type string!",
  }),
  isActive: Joi.bool().messages({
    "bool.base": "is Active field must be of type boolean",
  }),
  alt: Joi.string().messages({
    "string.base": "alt must be of type string!",
  }),
});