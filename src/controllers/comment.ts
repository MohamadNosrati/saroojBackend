import type { NextFunction, Request, Response } from "express";
import CommentModel from "../models/comment.js";
import catchAsync from "../tools/catchAsync.js";
import checkExists from "../tools/checkExsits.js";
import CustomError from "../tools/CustomError.js";

export const createComment = catchAsync(async (req: Request, res: Response) => {
  const comment = await CommentModel.create(req.body);
  res.status(201).json({
    status: 201,
    message: "نظر با موفقیت صاخته شد.",
    data: comment,
  });
});

export const getAllComments = catchAsync(
  async (req: Request, res: Response) => {
    const comments = await CommentModel.find();
    res.status(201).json({
      status: 201,
      message: "لیست نظرات با موفقیت دریافت شد.",
      data: comments,
    });
  }
);

export const findComment = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const comment = await CommentModel.findById(req.params.id);
    if(!comment){
      return next(new CustomError(400,"no comment"))
    }
    res.status(201).json({
      status: 201,
      message: "پروژه با موفقیت دریافت شد",
      data: comment,
    });
  }
);

export const deleteComment = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    await checkExists(CommentModel, next, req.params.id as string);
    await CommentModel.findByIdAndDelete(req.params.id);
    res.status(201).json({
      status: 201,
      message: "نظر با موفقیت پاک شد.",
    });
  }
);

export const updateComment = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    await checkExists(CommentModel, next, req.params.id as string);
    res.status(201).json({
      status: 201,
      message: "نظر با موفقیت به روز رسانی شد.",
      data: "",
    });
  }
);
