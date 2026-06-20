import CustomError from "./CustomError.js";
export const checkUnique = async (model, next, key, value, entityName) => {
    const isRepeated = await model.findOne({ [key]: value });
    if (isRepeated) {
        return next(new CustomError(400, `${entityName} با این نام وجود دارد!`));
    }
};
//# sourceMappingURL=checkUnique.js.map