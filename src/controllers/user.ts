import type { NextFunction, Request, Response } from "express";
import catchAsync from "../tools/catchAsync.js";
import checkExists from "../tools/checkExsits.js";
import UserModel from "../models/user.js";
import pictureDeleter from "../tools/pictureDeleter.js";

export const getAllUsers = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const users = await UserModel.find().populate("pictureId",["image","id"]);    
    res.status(201).json({
      status: 201,
      message: "کاربر با موفقیت به روز رسانی شد.",
      data: users,
    });
  }
);

export const updateUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await checkExists(UserModel, next, "کاربر", req.params?.id);
    const newUser = await UserModel.findByIdAndUpdate(
      req?.params?.id,
      { $set: req?.body },
      {
        new: true,
        runValidators: true,
      }
    ).populate("pictureId",["image","id"]);
    if (user?.pictureId?.toString() !== newUser?.pictureId?.toString()) {
      await pictureDeleter(user?.pictureId)
    }
    res.status(201).json({
      status: 201,
      message: "کاربر با موفقیت به روز رسانی شد.",
      data: newUser,
    });
  }
);

