import Joi from "joi";
export const pictureSchema = Joi.object({
    image: Joi.required().messages({
        "string.base": "image must be of type string!",
        "any.required": "image field is required!",
    }),
});
//# sourceMappingURL=picture.js.map