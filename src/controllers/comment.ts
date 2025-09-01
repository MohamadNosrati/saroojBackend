import type { Request, Response } from "express";
import CommentModel from "../models/comment.js";

export const createComment = async (req: Request, res: Response) => {
  const comment = await CommentModel.create(req.body);
  res.status(201).json({
    status: 201,
    message: "نظر با موفقیت صاخته شد.",
    data: comment,
  });
};

export const getAllComments = async (req: Request, res: Response) => {
  const comments =  await  CommentModel.find();
  res.status(201).json({
    status: 201,
    message: "لیست نظرات با موفقیت دریافت شد.",
    data: comments,
  });
};

export const findComment = async (req: Request, res: Response) => {
  const comment = await CommentModel.findById(req.params.id);
  res.status(201).json({
    status: 201,
    message: "پروژه با موفقیت دریافت شد",
    data: comment,
  });
};

export const deleteComment = async (req: Request, res: Response) => {
  await CommentModel.findByIdAndDelete(req.params.id)
  res.status(201).json({
    status: 201,
    message: "نظر با موفقیت پاک شد.",
  });
};

export const updateComment = (req: Request, res: Response) => {
  res.status(201).json({
    status: 201,
    message: "نظر با موفقیت به روز رسانی شد.",
    data: "",
  });
};
