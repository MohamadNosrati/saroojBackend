import type { NextFunction, Request, Response } from "express";
import catchAsync from "../tools/catchAsync.js";
import PictureModel from "../models/picture.js";
import CustomError from "../tools/CustomError.js";

export const uploadPicture = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    if (!req.files) {
      return next(new CustomError(400, "images cant be undefind"));
    }
    const files = req.files as Express.Multer.File[];
    const data = files?.map((item) => ({
      image: item.filename,
    }));
    const pictures = await PictureModel.create(data);
    res.status(201).json({
      status: 201,
      message: "files uploaded successfully!",
      data: pictures,
    });
  }
);

export const deletePicture = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {}
);
