import type { NextFunction, Request, Response } from "express";
import ProjectModel from "../models/project.js";
import catchAsync from "../tools/catchAsync.js";
import checkExists from "../tools/checkExsits.js";
import CategoryModel from "../models/category.js";
import PictureModel from "../models/picture.js";
import pictureDeleter, { unlinkFile } from "../tools/pictureDeleter.js";

export const createProject = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    await checkExists(CategoryModel, next, "دسته بندی", req.body?.categoryId);
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
    const projects = await ProjectModel.find()
      .populate("pictureId", ["image", "id"])
      .populate("categoryId", ["title", "id"]);
    res.status(200).json({
      status: 200,
      message: "لیست پروزه ها با موفقیت دریافت شد.",
      data: projects,
    });
  }
);

export const findProject = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    await checkExists(ProjectModel, next, "پروژه", req.params?.id);
    const project = await ProjectModel.findById(req.params?.id)
      .populate("categoryId", ["title", "id"])
      .populate("pictureId", ["image", "id"])
      .populate("images.pictureId", ["image", "id"]);
    res.status(201).json({
      status: 201,
      message: "پروژه با موفقیت دریافت شد",
      data: project,
    });
  }
);

export const deleteProject = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    await checkExists(ProjectModel, next, "پروژه", req.params?.id);
    const project = await ProjectModel.findByIdAndDelete(req?.params?.id)
      .populate("pictureId", ["image", "id"])
      .populate("images.pictureId", ["image", "id"]);

    const imageIds = project?.images?.map((item: any) => item?.pictureId?.id);
    const imageNames = project?.images?.map(
      (item: any) => item?.pictureId?.image
    );
    await PictureModel.deleteMany({ _id: { $in: imageIds } });
    imageNames?.forEach((item) => unlinkFile(item));
    res.status(201).json({
      status: 201,
      message: "پروزه با موفقیت پاک شد.",
    });
  }
);

export const updateProject = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    await checkExists(ProjectModel, next, "پروژه", req.params?.id);
    const project: any = await ProjectModel.findById(req?.params?.id)
      .populate("pictureId", ["image", "id"])
      .populate("images.pictureId", ["image", "id"]);
    const newProject: any = await ProjectModel.findByIdAndUpdate(
      req?.params?.id,
      {
        $set: req.body,
      },
      {
        runValidators: true,
        new: true,
      }
    )
      .populate("pictureId", ["image", "id"])
      .populate("images.pictureId", ["image", "id"]);
    if (newProject?.pictureId.id !== project?.pictureId.id) {
      await pictureDeleter(project?.pictureId.id);
    }
    const newImageIds = newProject?.images?.map((item: any) => item?.id);
    const prvImageIds = project?.images?.map((item: any) => item?.id);
    const removedIds = prvImageIds?.filter(
      (item: any) => !newImageIds.includes(item)
    );
    await PictureModel.deleteMany({ _id: { $in: removedIds } });
    const removedImages = project?.images
      ?.filter((item: any) => removedIds.includes(item?.id))
      ?.map((item: any) => item.image);
    removedImages?.forEach((item: any) => unlinkFile(item));
    res.status(201).json({
      status: 201,
      message: "پروزه با موفقیت به روز رسانی شد.",
      data: newProject,
    });
  }
);
