import Joi from "joi";

const categroyBodySchema = Joi.object({
  title: Joi.string().required().messages({
    "string.base": "title must be of type string!",
    "any.required": "title field is required!",
  }),
  description: Joi.string().required().messages({
    "string.base": "description must be of type string!",
    "any.required": "description field is required!",
  }),
  pictureId: Joi.string().id.required().messages({
    "string.base": "email must be of type string!",
    "any.required": "email field is required!",
  }),
});
