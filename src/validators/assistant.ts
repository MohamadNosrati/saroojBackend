import Joi from "joi";

export const createAssistantMessageBodySchema = Joi.object({
  text: Joi.string().required().messages({
    "string.base": "text must be of type string!",
    "any.required": "text field is required!",
  }),
  sessionId: Joi.string().required().messages({
    "string.base": "description must be of type string!",
    "any.required": "description field is required!",
  }),
  role: Joi.string().valid("assistant", "user", "guest").required(),
});
