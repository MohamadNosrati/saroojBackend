import type { NextFunction } from "express";
import type { Model } from "mongoose";
import CustomError from "./CustomError.js";

export const checkUnique = async (model: Model<any>, next: NextFunction, key: string, value: string, entityName: string) => {
    const isRepeated = await model.findOne({ [key]: value });
    if (isRepeated) {
        return next(new CustomError(400, `${entityName} با این نام وجود دارد!`));
    }
}