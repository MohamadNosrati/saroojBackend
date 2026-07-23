import type { NextFunction, Request, Response } from "express";
import ProjectModel from "../models/project.js";
import catchAsync from "../tools/catchAsync.js";
import checkExists from "../tools/checkExsits.js";
import CategoryModel from "../models/category.js";
import PictureModel from "../models/picture.js";
import pictureDeleter, { unlinkFile } from "../tools/pictureDeleter.js";
import CustomError from "../tools/CustomError.js";
import { ApiFeatures } from "../tools/apiFeatures.js";
import type { IBFImage, IProjectSchema } from "../types/project.js";
import { checkUnique } from "../tools/checkUnique.js";
import type { IPopulatedPicture } from "../types/picture.js";

export const createProject = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    await checkUnique(ProjectModel, next, "title", req?.body?.title, "پروژه");
    await checkExists(CategoryModel, next, "دسته بندی", req.body?.categoryId);
    const project = await ProjectModel.create(req.body);
    console.log("project", project);
    res.status(201).json({
      status: 201,
      message: "پروزه با موفقیت صاخته شد.",
      data: project,
    });
  },
);

export const getAllProjects = catchAsync(
  async (req: Request, res: Response) => {
    const query = new ApiFeatures<IProjectSchema>(
      ProjectModel.find(),
      req?.query,
    );
    const projects = await query
      .filtering()
      .sorting()
      .pagination()
      .populate("pictureId", ["image", "id"])
      .populate("categoryId", ["title", "id"])
      .execute();

    const totalCount = await new ApiFeatures<IProjectSchema>(
      ProjectModel.find(),
      req?.query,
    )
      .filtering()
      .getTotalCount();
    const totalPages = req?.query?.limit
      ? Math.ceil(totalCount / Number(req?.query?.limit))
      : 1;
    res.status(200).json({
      status: 200,
      message: "لیست پروزه ها با موفقیت دریافت شد.",
      data: {
        result: projects,
        totalCount: totalCount,
        totalPages: totalPages,
      },
    });
  },
);

export const getAllSlugs = catchAsync(async (req: Request, res: Response) => {
  const projects = await ProjectModel.find().select(["id", "title","titleEn"])?.limit(40);
  res.status(200).json({
    status: 200,
    message: "لیست پروزه ها با موفقیت دریافت شد.",
    data: projects,
  });
});

export const getAllInfo = catchAsync(async (req: Request, res: Response) => {
  const projects = await ProjectModel.find()
    .select([
      "id",
      "title",
      "description",
      "area",
      "alt",
      "address",
      "artitectureStyle",
    ])
    ?.limit(100)
    .where("isActive", true);
  res.status(200).json({
    status: 200,
    message: "لیست  اظلاعات پروزه ها با موفقیت دریافت شد.",
    data: projects,
  });
});

export const findProject = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    await checkExists(ProjectModel, next, "پروژه", req.params?.id);
    const project = await ProjectModel.findById(req.params?.id)
      .populate("categoryId", ["title", "id"])
      .populate("pictureId", ["image", "id"])
      .populate("images.before.pictureId", ["image", "id"])
      .populate("imagesEn.beforeEn.pictureIdEn", ["image", "id"])
      .populate("images.after.pictureId", ["image", "id"])
      .populate("imagesEn.afterEn.pictureIdEn", ["image", "id"])
      .populate("steps.pictureId", ["image", "id"])
      .populate("stepsEn.pictureIdEn", ["image", "id"]);
    res.status(200).json({
      status: 200,
      message: "پروژه با موفقیت دریافت شد",
      data: project,
    });
  },
);

export const findProjectBySlug = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const project = await ProjectModel.findOne({
      title: decodeURIComponent(req.params?.slug?.trim() as string),
    });
    if (!project) {
      return next(new CustomError(400, "پروژه ای با این نام وجود ندارد."));
    }
    console.log("project", project);
    const projectWithImages = await ProjectModel.findById(project?.id)
      .populate("categoryId", ["title", "id"])
      .populate("pictureId", ["image", "id"])
      .populate("images.before.pictureId", ["image", "id"])
      .populate("imagesEn.beforeEn.pictureIdEn", ["image", "id"])
      .populate("images.after.pictureId", ["image", "id"])
      .populate("imagesEn.afterEn.pictureIdEn", ["image", "id"])
      .populate("steps.pictureId", ["image", "id"])
      .populate("stepsEn.pictureIdEn", ["image", "id"]);
    const suggestions = await ProjectModel.find({
      categoryId: project?.categoryId,
      _id: { $ne: project?.id },
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
        suggestions: suggestions,
      },
    });
  },
);

export const deleteProject = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    await checkExists(ProjectModel, next, "پروژه", req.params?.id);
    const project = await ProjectModel.findByIdAndDelete(req?.params?.id)
      .populate("pictureId", ["image", "id"])
      .populate("images.before.pictureId", ["image", "id"])
      .populate("images.after.pictureId", ["image", "id"])
      .populate("steps.pictureId", ["image", "id"]);
    const bfImageIds: string[] =
      project?.images
        ?.map(({ before, after }: any) => [
          before?.pictureId?.id,
          after?.pictureId?.id,
        ])
        ?.flatMap((elem) => elem) || [];
    const bfImageNames: string[] =
      project?.images
        ?.map(({ before, after }: any) => [
          before?.pictureId?.image,
          after?.pictureId?.image,
        ])
        ?.flatMap((elem) => elem) || [];
    const stepsImagesIds =
      project?.steps?.map((item: any) => item?.pictureId?.id) || [];
    const stepImageNames: string[] =
      project?.steps?.map((item: any) => item?.pictureId?.image) || [];

    const imageIds = [...bfImageIds, ...stepsImagesIds];
    const imageNames = [...bfImageNames, ...stepImageNames];

    await PictureModel.deleteMany({ _id: { $in: imageIds } });
    imageNames?.forEach((item) => unlinkFile(item));
    res.status(201).json({
      status: 201,
      message: "پروزه با موفقیت پاک شد.",
    });
  },
);

export const updateProject = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    await checkExists(ProjectModel, next, "پروژه", req.params?.id);

    const project: any = await ProjectModel.findById(req?.params?.id)
      .populate("pictureId", ["image", "id"])
      .populate("images.before.pictureId", ["image", "id"])
      .populate("images.after.pictureId", ["image", "id"])
      .populate("steps.pictureId", ["image", "id"]);
    console.log("newProject", project);
    const newProject: any = await ProjectModel.findByIdAndUpdate(
      req?.params?.id,
      {
        $set: req.body,
      },
      {
        runValidators: true,
        new: true,
      },
    )
      .populate("pictureId", ["image", "id"])
      .populate("images.before.pictureId", ["image", "id"])
      .populate("images.after.pictureId", ["image", "id"])
      .populate("steps.pictureId", ["image", "id"]);

    if (
      newProject?.pictureId.id?.toString() !== project?.pictureId.id?.toString()
    ) {
      await pictureDeleter(project?.pictureId.id);
    }

    // Handling Removing Extra Files

    const newBfImageIds =
      newProject?.images
        ?.flatMap(({ before, after }: any) => [
          before?.pictureId?.id?.toString(),
          after?.pictureId?.id?.toString(),
        ])
        ?.filter(Boolean) ?? [];
    const newStepsImageIds =
      newProject.steps
        .map((item: any) => item.pictureId?.id?.toString())
        ?.filter(Boolean) ?? [];

    const newImageIds = [...newBfImageIds, ...newStepsImageIds];

    const prvBfImageIds =
      project?.images
        ?.flatMap(({ before, after }: any) => [
          before?.pictureId?.id?.toString(),
          after?.pictureId?.id?.toString(),
        ])
        ?.filter(Boolean) ?? [];
    const prvStepsImageIds =
      project?.steps
        ?.map((item: any) => item?.pictureId?.id?.toString())
        ?.filter(Boolean) ?? [];

    const prvImageIds = [...prvBfImageIds, ...prvStepsImageIds];
    const removedIds = prvImageIds?.filter(
      (item: any) => !newImageIds.includes(item),
    );
    await PictureModel.deleteMany({ _id: { $in: removedIds } });

    const newBfImageNames = newProject?.images
      ?.flatMap(({ before, after }: any) => [
        before?.pictureId?.image,
        after?.pictureId?.image,
      ])
      ?.filter(Boolean);

    const newStepsImageNames =
      newProject?.steps
        ?.map((item: any) => item?.pictureId?.image)
        ?.filter(Boolean) ?? [];

    const prvBfImageNames =
      project?.images
        ?.flatMap(({ before, after }: any) => [
          before?.pictureId?.image,
          after?.pictureId?.image,
        ])
        ?.filter(Boolean) ?? [];

    const prvStepsImageNames =
      project?.steps
        ?.map((item: any) => item?.pictureId?.image)
        .filter(Boolean) ?? [];

    const prvImageNames = [...prvBfImageNames, ...prvStepsImageNames];
    const newImageNames = [...newBfImageNames, ...newStepsImageNames];

    const removedImageNames = prvImageNames?.filter(
      (item: any) => !newImageNames.includes(item),
    );

    await Promise.all(removedImageNames.map(unlinkFile));
    res.status(201).json({
      status: 201,
      message: "پروزه با موفقیت به روز رسانی شد.",
      data: newProject,
    });
  },
);
