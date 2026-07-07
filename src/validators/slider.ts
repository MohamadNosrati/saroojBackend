import Joi from "joi";

export const createSliderBodySchema = Joi.object({
  title: Joi.string().required().messages({
    "string.base": "title must be of type string!",
  }),
  link: Joi.string().allow("").required().messages({
    "string.base": "link must be of type string!",
  }),
  linkEn: Joi.string().allow("").required().messages({
    "string.base": "linkEn must be of type string!",
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
  link: Joi.string().allow("").messages({
    "string.base": "link must be of type string!",
  }),
  linkEn: Joi.string().allow("").messages({
    "string.base": "linkEn must be of type string!",
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
  altEn: Joi.string().allow("").messages({
    "string.base": "altEn must be of type string!",
  }),
  descriptionEn: Joi.string().allow("").messages({
    "string.base": "descriptionEn must be of type string!",
  }),
  titleEn: Joi.string().allow("").messages({
    "string.base": "titleEn must be of type string!",
  }),
});
