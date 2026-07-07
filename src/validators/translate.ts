import Joi from "joi";

const translateSchema = Joi.object().pattern(
  Joi.string(), // key must be a string
  Joi.string()  // value must be a string
);

export default translateSchema;