import Joi from "joi";

const beforeAfterImageSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.base": "name must be of type string!",
    "any.required": "name field is required!",
  }),
  pictureId: Joi.string().required().messages({
    "string.base": "pictureId must be of type string!",
    "any.required": "pictureId field is required!",
  }),
});
const beforeAfterEnImageSchema = Joi.object({
  nameEn: Joi.string().required().messages({
    "string.base": "name must be of type string!",
    "any.required": "name field is required!",
  }),
  pictureIdEn: Joi.string().required().messages({
    "string.base": "pictureId must be of type string!",
    "any.required": "pictureId field is required!",
  }),
});
const stepsSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.base": "name must be of type string!",
    "any.required": "name field is required!",
  }),
  pictureId: Joi.string().required().messages({
    "string.base": "pictureId must be of type string!",
    "any.required": "pictureId field is required!",
  }),
  description: Joi.string().required().messages({
    "string.base": "description must be of type string!",
    "any.required": "description field is required!",
  }),
  alt: Joi.string().required().messages({
    "string.base": "alt must be of type string!",
    "any.required": "alt field is required!",
  }),
  video: Joi.string().allow("").messages({
    "string.base": "alt must be of type string!",
  }),
  isActive: Joi.bool().messages({
    "bool.base": "is Active field must be of type boolean",
  }),
});

const stepsEnSchema = Joi.object({
  nameEn: Joi.string().required().messages({
    "string.base": "description must be of type string!",
    "any.required": "description field is required!",
  }),
  altEn: Joi.string().required().messages({
    "string.base": "altEn must be of type string!",
    "any.required": "altEn field is required!",
  }),
  descriptionEn: Joi.string().required().messages({
    "string.base": "descriptionEn must be of type string!",
    "any.required": "descriptionEn field is required!",
  }),
  videoEn: Joi.string().allow("").messages({
    "string.base": "videoEn must be of type string!",
  }),
  pictureIdEn: Joi.string().allow("").messages({
    "string.base": "pictureIdEn must be of type string!",
  }),
  isActiveEn: Joi.any().messages({
    "bool.base": "is Active field must be of type boolean",
  }),
  _idEn: Joi.string().messages({
    "string.base": "_idEn field must be of type boolean",
  }),
});

const pictureSchema = Joi.object({
  before: beforeAfterImageSchema,
  after: beforeAfterImageSchema,
});
const pictureEnSchema = Joi.object({
  beforeEn: beforeAfterEnImageSchema,
  afterEn: beforeAfterEnImageSchema,
  idEn: Joi.string().messages({
    "string.base": "_idEn field must be of type boolean",
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
  alt: Joi.string().required().messages({
    "string.base": "alt must be of type string!",
    "any.required": "alt field is required!",
  }),
  address: Joi.string().required().messages({
    "string.base": "address must be of type string!",
    "any.required": "address field is required!",
  }),
  categoryId: Joi.string().required().messages({
    "string.base": "categoryId must be of type string!",
    "any.required": "categoryId field is required!",
  }),
  pictureId: Joi.string().required().messages({
    "string.base": "pictureId must be of type string!",
    "any.required": "pictureId field is required!",
  }),
  artitectureStyle: Joi.string().allow("").required().messages({
    "string.base": "pictureId must be of type string!",
  }),
  video: Joi.string().allow("").messages({
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
  endDate: Joi.date().allow("").messages({
    "date.base": "endDate field must be of type date",
  }),
  isActive: Joi.bool().messages({
    "bool.base": "is Active field must be of type boolean",
  }),
  images: Joi.array().items(pictureSchema).required().messages({
    "any.required": "images field is required!",
    "array.base": "images filed must be of type array!",
  }),
  steps: Joi.array().items(stepsSchema).required().messages({
    "any.required": "images field is required!",
    "array.base": "images filed must be of type array!",
  }),
});

export const updateProjectBodySchema = Joi.object({
  title: Joi.string().messages({
    "string.base": "title must be of type string!",
  }),
  titleEn: Joi.string().messages({
    "string.base": "titleEn must be of type string!",
  }),
  description: Joi.string().messages({
    "string.base": "description must be of type string!",
  }),
  descriptionEn: Joi.string().messages({
    "string.base": "descriptionEn must be of type string!",
  }),
  artitectureStyle: Joi.string().allow("").messages({
    "string.base": "description must be of type string!",
  }),
  artitectureStyleEn: Joi.string().allow("").messages({
    "string.base": "descriptionEn must be of type string!",
  }),
  categoryId: Joi.string().messages({
    "string.base": "categoryId must be of type string!",
  }),
  pictureId: Joi.string().messages({
    "string.base": "pictureId must be of type string!",
  }),
  video: Joi.string().allow("").messages({
    "string.base": "video must be of type string!",
  }),
  videoEn: Joi.string().allow("").messages({
    "string.base": "videoEn must be of type string!",
  }),
  area: Joi.number().messages({
    "number.base": "area field must be of type number",
  }),
  startDate: Joi.date().messages({
    "date.base": "startDate field must be of type date",
  }),
  endDate: Joi.date().allow("").messages({
    "date.base": "endDate field must be of type date",
  }),
  isActive: Joi.bool().messages({
    "bool.base": "is Active field must be of type boolean",
  }),
  images: Joi.array().items(pictureSchema).messages({
    "array.base": "images filed must be of type array!",
  }),
  imagesEn: Joi.array().items(pictureEnSchema).messages({
    "array.base": "imagesEn filed must be of type array!",
  }),
  alt: Joi.string().messages({
    "string.base": "alt must be of type string!",
  }),
  address: Joi.string().allow("").messages({
    "string.base": "description must be of type string!",
  }),
  steps: Joi.array().items(stepsSchema).messages({
    "array.base": "steps filed must be of type array!",
  }),
  stepsEn: Joi.array().items(stepsEnSchema).messages({
    "array.base": "stepsEn filed must be of type array!",
  }),
  altEn: Joi.string().allow("").messages({
    "string.base": "altEn must be of type string!",
  }),
  addressEn: Joi.string().allow("").messages({
    "string.base": "addressEn must be of type string!",
  }),
});
