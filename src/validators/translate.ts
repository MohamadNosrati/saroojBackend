import Joi from "joi";

const translateSchema = Joi.object().pattern(
  Joi.string(),
  Joi.alternatives().try(Joi.string(), Joi.array(), Joi.object()),
);

export default translateSchema