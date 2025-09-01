import type { NextFunction } from "express";
import type { Model } from "mongoose";
import CustomError from "./CustomError.js";
import mongoose from "mongoose";

const checkExists = async (
  modal: Model<any>,
  next: NextFunction,
  id: string
) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    
    return next(new CustomError(400, "فرمت آیدی صحیح نمیباشد."));
  }
  const item = await modal.findById(id);
  if (!item) {
    return next(new CustomError(400, "آیتمی با این آیدی وجود ندارد!"));
  }
};

export default checkExists;
