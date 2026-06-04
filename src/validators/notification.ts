import Joi from "joi";

export const createNotificationBodySchema = Joi.object({
    title: Joi.string().required().messages({
      "string.base": "title must be of type string!",
      "any.required": "title field is required!",
    }),
    description: Joi.string().required().messages({
      "string.base": "description must be of type string!",
      "any.required": "description field is required!",
    }),
    url: Joi.string().required().messages({
      "string.base": "url must be of type string!",
    }),
  });