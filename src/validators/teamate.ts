import Joi from "joi";

export const createTeamateBodySchema = Joi.object({
  title: Joi.string().required().messages({
    "string.base": "title must be of type string!",
    "any.required": "title field is required!",
  }),
  position: Joi.string().required().messages({
    "string.base": "position must be of type string!",
    "any.required": "position field is required!",
  }),
  description: Joi.string().required().messages({
    "string.base": "description must be of type string!",
    "any.required": "description field is required!",
  }),
  pictureId: Joi.string().required().messages({
    "string.base": "pictureId must be of type string!",
    "any.required": "pictureId field is required!",
  }),
  isActive: Joi.bool().messages({
    "bool.base": "is Active field must be of type boolean",
  }),
});

export const updateTeamateBodySchema = Joi.object({
  title: Joi.string().messages({
    "string.base": "title must be of type string!",
  }),
  position: Joi.string().messages({
    "string.base": "position must be of type string!",
  }),
  description: Joi.string().messages({
    "string.base": "description must be of type string!",
  }),
  pictureId: Joi.string().messages({
    "string.base": "pictureId must be of type string!",
  }),
  isActive: Joi.bool().messages({
    "bool.base": "is Active field must be of type boolean",
  }),
});
