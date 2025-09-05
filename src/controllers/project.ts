import type { NextFunction, Request, Response } from "express";
import ProjectModel from "../models/project.js";
import catchAsync from "../tools/catchAsync.js";
import checkExists from "../tools/checkExsits.js";
import CategoryModel from "../models/category.js";

export const createProject = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    await checkExists(CategoryModel, next, req.body?.categoryId);
    const project = await ProjectModel.create(req.body);
    res.status(201).json({
      status: 201,
      message: "پروزه با موفقیت صاخته شد.",
      data: project,
    });
  }
);

export const getAllProjects = catchAsync(
  async (req: Request, res: Response) => {
    const projects = await ProjectModel.find().populate("pictureId", [
      "image",
      "id",
    ]);
    res.status(200).json({
      status: 200,
      message: "لیست پروزه ها با موفقیت دریافت شد.",
      data: projects,
    });
  }
);

export const findProject = (req: Request, res: Response) => {
  res.status(201).json({
    status: 201,
    message: "پروژه با موفقیت دریافت شد",
    data: "",
  });
};

export const deleteProject = (req: Request, res: Response) => {
  res.status(201).json({
    status: 201,
    message: "پروزه با موفقیت پاک شد.",
    data: "",
  });
};

export const updateProject = (req: Request, res: Response) => {
  res.status(201).json({
    status: 201,
    message: "پروزه با موفقیت به روز رسانی شد.",
    data: "",
  });
};
