import type { NextFunction, Request, Response } from "express";
import catchAsync from "../tools/catchAsync.js";
import checkExists from "../tools/checkExsits.js";
import pictureDeleter from "../tools/pictureDeleter.js";
import BlogModel from "../models/blog.js";
import CustomError from "../tools/CustomError.js";
import { ApiFeatures } from "../tools/apiFeatures.js";
import type { IBlogSchema } from "../types/blog.js";
import { checkUnique } from "../tools/checkUnique.js";

export const createBlog = catchAsync(
  async (req: Request, res: Response, next) => {
    await checkUnique(BlogModel, next, "title", req?.body?.title, "مقاله");
    const blog = await BlogModel.create({
      ...req?.body,
      userId: req.user?.id,
    });
    res.status(201).json({
      status: 201,
      message: "مقاله با موفقیت صاخته شد.",
      data: blog,
    });
  },
);

export const getAllBlogs = catchAsync(async (req: Request, res: Response) => {
  console.log("params", req?.query);
  const query = new ApiFeatures<IBlogSchema>(BlogModel.find(), req?.query);
  const blogs = await query
    .filtering()
    .sorting()
    .pagination()
    .populate("pictureId", ["image", "id"])
    .populate("userId", ["image", "id", "userName"], {
      path: "pictureId",
      select: ["image", "id"],
    })
    .execute();
  const totalCount = await new ApiFeatures<IBlogSchema>(
    BlogModel.find(),
    req?.query,
  )
    .filtering()
    .getTotalCount();
  const totalPages = req?.query?.limit
    ? Math.ceil(totalCount / Number(req?.query?.limit))
    : 1;

  res.status(200).json({
    status: 200,
    message: "لیست مقالات با موفقیت دریافت شد.",
    data: {
      result: blogs,
      totalCount: totalCount,
      totalPages: totalPages,
    },
  });
});

export const getAllSlugs = catchAsync(async (req: Request, res: Response) => {
  const projects = await BlogModel.find().select(["id", "title"])?.limit(40);
  res.status(200).json({
    status: 200,
    message: "لیست پروزه ها با موفقیت دریافت شد.",
    data: projects,
  });
});

export const findBlog = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const blog = await checkExists(
      BlogModel,
      next,
      "مقاله",
      req.params?.id,
      "pictureId",
      ["image", "id"],
    );
    res.status(201).json({
      status: 201,
      message: "اسلایدر با موفقیت دریافت شد",
      data: blog,
    });
  },
);

export const findBlogBySlug = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const slug = decodeURIComponent(req.params?.slug?.trim() as string);

    const blog = await BlogModel.findOne({
      $or: [{ title: slug }, { titleEn: slug }],
    });
    if (!blog) {
      return next(new CustomError(400, "مقاله ای با این نام وجود ندارد."));
    }
    const blogWithImage = await BlogModel.findById(blog?.id)
      .populate("pictureId", ["image", "id"])
      .populate([
        {
          path: "userId",
          select: ["id", "userName", "pictureId"],
          populate: {
            path: "pictureId",
            select: ["image", "id"],
          },
        },
      ]);

    const suggestions = await BlogModel.find()
      ?.limit(10)
      ?.sort({ createdAt: 1 })
      ?.populate("pictureId", ["image", "id"]);
    res.status(200).json({
      status: 200,
      message: "مقاله با موفقیت دریافت شد",
      data: {
        blog: blogWithImage,
        suggestions: suggestions,
      },
    });
  },
);

export const deleteBlog = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    await checkExists(BlogModel, next, "اسلایدر", req.params?.id);
    await BlogModel.findByIdAndDelete(req.params?.id);
    res.status(201).json({
      status: 201,
      message: "مقاله با موفقیت پاک شد.",
    });
  },
);

export const updateBlog = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const blog = await checkExists(BlogModel, next, "مقاله", req.params?.id);
    const newBlog = await BlogModel.findByIdAndUpdate(
      req?.params?.id,
      { $set: req?.body },
      {
        new: true,
        runValidators: true,
      },
    );
    if (blog?.pictureId?.toString() !== newBlog?.pictureId?.toString()) {
      await pictureDeleter(blog?.pictureId);
    }
    res.status(201).json({
      status: 201,
      message: "مقاله با موفقیت به روز رسانی شد.",
      data: newBlog,
    });
  },
);
