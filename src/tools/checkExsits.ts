import type { NextFunction } from "express";
import type { Model } from "mongoose";
import CustomError from "./CustomError.js";
import mongoose from "mongoose";

const checkExists = async (
  modal: Model<any>,
  next: NextFunction,
  itemName:string,
  id?: string,
  populate?: string,
  populateFields?: string[]
) => {
  if (!mongoose.Types.ObjectId.isValid(id as string)) {
    console.log("req is here")
    return next(new CustomError(400, "فرمت آیدی صحیح نمیباشد."));
  }
  let item;
  if (populate && populateFields) {
    item = await modal.findById(id).populate(populate, populateFields);
  } else {
    item = await modal.findById(id);
  }
  if (!item) {
    return next(new CustomError(400, `${itemName} با این آیدی وجود ندارد!`));
  }
  return item;
};

export default checkExists;
