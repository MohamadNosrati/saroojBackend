import type { NextFunction, Request, Response } from "express";
import catchAsync from "../tools/catchAsync.js";
import CategoryModel from "../models/category.js";
import checkExists from "../tools/checkExsits.js";

export const createCategory = catchAsync(
  async (req: Request, res: Response) => {
    const category = await CategoryModel.create(req.body);
    res.status(201).json({
      status: 201,
      message: "دسته یندی با موفقیت صاخته شد.",
      data: category,
    });
  }
);

export const getAllCategorys = catchAsync(
  async (req: Request, res: Response) => {
    const categories = await CategoryModel.find().populate("pictureId", [
      "image",
      "id",
    ]);
    res.status(201).json({
      status: 201,
      message: "لیست دسته یندی ها با موفقیت دریافت شد.",
      data: categories,
    });
  }
);

export const findCategory = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const category = await checkExists(
      CategoryModel,
      next,
      req.params?.id,
      "pictureId",
      ["image", "id"]
    );
    res.status(201).json({
      status: 201,
      message: "دسته بندی با موفقیت دریافت شد",
      data: category,
    });
  }
);

export const deleteCategory = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    await checkExists(CategoryModel, next, req.params?.id);
    await CategoryModel.findByIdAndDelete(req.params?.id);
    res.status(201).json({
      status: 201,
      message: "دسته یندی با موفقیت پاک شد.",
    });
  }
);

export const updateCategory = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    await checkExists(CategoryModel, next, req.params?.id);
    const newCategory = await CategoryModel.findByIdAndUpdate(
      req?.params?.id,
      { $set: req?.body },
      {
        new: true,
        runValidators: true,
      }
    );
    res.status(201).json({
      status: 201,
      message: "دسته یندی با موفقیت به روز رسانی شد.",
      data: newCategory,
    });
  }
);
