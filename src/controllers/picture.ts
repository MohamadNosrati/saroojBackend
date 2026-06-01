import type { NextFunction, Request, Response } from "express";
import catchAsync from "../tools/catchAsync.js";
import PictureModel from "../models/picture.js";
import CustomError from "../tools/CustomError.js";
import checkExists from "../tools/checkExsits.js";

export const uploadPicture = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    console.log("files", req?.file);
    if (!req.file) {
      return next(new CustomError(400, "image cant be undefind"));
    }
    const file = req.file as Express.Multer.File;
    const pictures = await PictureModel.create({
      image: file?.filename,
    });
    res.status(201).json({
      status: 201,
      message: "files uploaded successfully!",
      data: pictures,
    });
  },
);

export const findPicture = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const pciture = await checkExists(
      PictureModel,
      next,
      "تصویر",
      req.params?.id,
    );
    res.status(200).json({
      status: 200,
      message: "file found successfully!",
      data: pciture,
    });
  },
);

export const deletePicture = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {},
);
