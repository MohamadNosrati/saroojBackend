import type { NextFunction, Request, Response } from "express";
import ProjectModel from "../models/project.js";
import catchAsync from "../tools/catchAsync.js";
import checkExists from "../tools/checkExsits.js";
import CategoryModel from "../models/category.js";
import PictureModel from "../models/picture.js";
import pictureDeleter, { unlinkFile } from "../tools/pictureDeleter.js";
import CustomError from "../tools/CustomError.js";
import { ApiFeatures } from "../tools/apiFeatures.js";
import type { IProjectSchema } from "../types/project.js";
import { checkUnique } from "../tools/checkUnique.js";

export const createProject = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    await checkUnique(ProjectModel, next, "title", req?.body?.title, "پروژه")
    await checkExists(CategoryModel, next, "دسته بندی", req.body?.categoryId);
    const project = await ProjectModel.create(req.body);
    console.log("project", project)
    res.status(201).json({
      status: 201,
      message: "پروزه با موفقیت صاخته شد.",
      data: project,
    });
  }
);

export const getAllProjects = catchAsync(
  async (req: Request, res: Response) => {
    const query = new ApiFeatures<IProjectSchema>(ProjectModel.find(), req?.query);
    const projects = await query.filtering().sorting().pagination()
      .populate("pictureId", ["image", "id"])
      .populate("categoryId", ["title", "id"]).execute();

    const totalCount = await new ApiFeatures<IProjectSchema>(ProjectModel.find(), req?.query).filtering().getTotalCount();
    const totalPages = req?.query?.limit ? Math.ceil(totalCount / (Number(req?.query?.limit))) : 1;
    res.status(200).json({
      status: 200,
      message: "لیست پروزه ها با موفقیت دریافت شد.",
      data: {
        result: projects,
        totalCount: totalCount,
        totalPages: totalPages
      },
    });
  }
);

export const getAllSlugs = catchAsync(
  async (req: Request, res: Response) => {
    const projects = await ProjectModel.find().select(["id", "title"])?.limit(40);
    console.log("projectIds", projects)
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
      .populate("images.before.pictureId", ["image", "id"])
      .populate("images.after.pictureId", ["image", "id"]);
    res.status(200).json({
      status: 200,
      message: "پروژه با موفقیت دریافت شد",
      data: project,
    });
  }
);

export const findProjectBySlug = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const project = await ProjectModel.findOne({ title: decodeURIComponent(req.params?.slug?.trim() as string) });
    if (!project) {
      return next(new CustomError(400, "پروژه ای با این نام وجود ندارد."))
    }
    const projectWithImages = await ProjectModel.findById(project?.id)
      .populate("categoryId", ["title", "id"])
      .populate("pictureId", ["image", "id"])
      .populate("images.before.pictureId", ["image", "id"])
      .populate("images.after.pictureId", ["image", "id"]);



    const suggestions = await ProjectModel.find({
      categoryId: project?.categoryId,
      _id: { $ne: project?.id }
    })
      .sort({ createdAt: -1 })
      .limit(10)
      .populate("pictureId", ["image", "id"])
      .lean(); 
    res.status(200).json({
      status: 200,
      message: "پروژه با موفقیت دریافت شد",
      data: {
        project: projectWithImages,
        suggestions: suggestions
      },
    });


  }
);

export const deleteProject = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    await checkExists(ProjectModel, next, "پروژه", req.params?.id);
    const project = await ProjectModel.findByIdAndDelete(req?.params?.id)
      .populate("pictureId", ["image", "id"])
      .populate("images.before.pictureId", ["image", "id"])
      .populate("images.after.pictureId", ["image", "id"]);
    console.log("project", project?.images[0])
    const imageIds = project?.images?.map(({ before, after }: any) => [before?.pictureId?.id, after?.pictureId?.id])?.flatMap(elem => elem);
    const imageNames = project?.images?.map(
      ({ before, after }: any) => [before?.pictureId?.image, after?.pictureId?.image]
    )?.flatMap(elem => elem)
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
      .populate("images.before.pictureId", ["image", "id"])
      .populate("images.after.pictureId", ["image", "id"]);
    console.log("hereeee")
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
      .populate("images.before.pictureId", ["image", "id"])
      .populate("images.after.pictureId", ["image", "id"]);
    if (newProject?.pictureId.id?.toString() !== project?.pictureId.id?.toString()) {
      await pictureDeleter(project?.pictureId.id);
    }

    const newImageIds = newProject?.images?.map(({ before, after }: any) => [before?.pictureId?.id, after?.pictureId?.id])?.flatMap((elem: any) => elem?.toString());
    const prvImageIds = project?.images?.map(({ before, after }: any) => [before?.pictureId?.id, after?.pictureId?.id])?.flatMap((elem: any) => elem?.toString());;
    const removedIds = prvImageIds?.filter(
      (item: any) => !newImageIds.includes(item)
    );
    console.log("removedIds", removedIds)
    await PictureModel.deleteMany({ _id: { $in: removedIds } });

    const newImageNames = newProject?.images?.map(({ before, after }: any) => [before?.pictureId?.image, after?.pictureId?.image])?.flatMap((elem: any) => elem);;
    const prvImageNames = project?.images?.map(({ before, after }: any) => [before?.pictureId?.image, after?.pictureId?.image])?.flatMap((elem: any) => elem);;
    const removedImageNames = prvImageNames?.filter(
      (item: any) => !newImageNames.includes(item)
    );



    removedImageNames?.forEach((item: any) => unlinkFile(item));
    res.status(201).json({
      status: 201,
      message: "پروزه با موفقیت به روز رسانی شد.",
      data: newProject,
    });
  }
);
