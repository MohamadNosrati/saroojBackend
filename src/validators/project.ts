import Joi from "joi";

const pictureSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.base": "name must be of type string!",
    "any.required": "name field is required!",
  }),
  pictureId: Joi.string().required().messages({
    "string.base": "pictureId must be of type string!",
    "any.required": "pictureId field is required!",
  }),
  type: Joi.string().valid("before", "after").required().messages({
    "string.base": "picture type must be of type string!",
    "string.values": "picture type must be before of after",
    "any.required": "picture type field is required!",
  }),
});

export const createProjectBodySchema = Joi.object({
  title: Joi.string().required().messages({
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
  video: Joi.string().messages({
    "string.base": "video must be of type string!",
  }),
  area: Joi.number().required().messages({
    "number.base": "area field must be of type number",
    "any.required": "area filed is required",
  }),
  startDate: Joi.date().required().messages({
    "date.base": "startDate field must be of type date",
    "any.required": "startDate filed is required",
  }),
  endDate: Joi.date().messages({
    "date.base": "endDate field must be of type date",
  }),
  isActive: Joi.bool().messages({
    "bool.base": "is Active field must be of type boolean",
  }),
  images: Joi.array().items(pictureSchema).required().messages({
    "any.required": "images field is required!",
    "array.base": "images filed must be of type array!",
  }),
});

export const updateProjectBodySchema = Joi.object({
  title: Joi.string().messages({
    "string.base": "title must be of type string!",
  }),
  description: Joi.string().messages({
    "string.base": "description must be of type string!",
  }),
  pictureId: Joi.string().messages({
    "string.base": "pictureId must be of type string!",
  }),
  video: Joi.string().messages({
    "string.base": "video must be of type string!",
  }),
  area: Joi.number().messages({
    "number.base": "area field must be of type number",
  }),
  startDate: Joi.date().messages({
    "date.base": "startDate field must be of type date",
  }),
  endDate: Joi.date().messages({
    "date.base": "endDate field must be of type date",
  }),
  isActive: Joi.bool().messages({
    "bool.base": "is Active field must be of type boolean",
  }),
  images: Joi.array().items(pictureSchema).messages({
    "array.base": "images filed must be of type array!",
  }),
});
