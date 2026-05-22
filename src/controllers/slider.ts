import type { NextFunction, Request, Response } from "express";
import catchAsync from "../tools/catchAsync.js";
import checkExists from "../tools/checkExsits.js";
import pictureDeleter from "../tools/pictureDeleter.js";
import SliderModel from "../models/slider.js";

export const createSlider = catchAsync(
    async (req: Request, res: Response) => {
        const category = await SliderModel.create(req.body);
        res.status(201).json({
            status: 201,
            message: "اسلایدر با موفقیت صاخته شد.",
            data: category,
        });
    }
);

export const getAllSliders = catchAsync(
    async (req: Request, res: Response) => {
        const categories = await SliderModel.find().populate("pictureId", [
            "image",
            "id",
        ]);
        res.status(200).json({
            status: 200,
            message: "لیست اسلایدر ها با موفقیت دریافت شد.",
            data: categories,
        });
    }
);

export const findSlider = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const category = await checkExists(
            SliderModel,
            next,
            "اسلایدر",
            req.params?.id,
            "pictureId",
            ["image", "id"]
        );
        res.status(201).json({
            status: 201,
            message: "اسلایدر با موفقیت دریافت شد",
            data: category,
        });
    }
);

export const deleteSlider = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        await checkExists(SliderModel, next, "اسلایدر", req.params?.id);
        await SliderModel.findByIdAndDelete(req.params?.id);
        res.status(201).json({
            status: 201,
            message: "اسلایدر با موفقیت پاک شد.",
        });
    }
);

export const updateSlider = catchAsync(
    async (req: Request, res: Response, next: NextFunction) => {
        const category = await checkExists(SliderModel, next, "اسلایدر", req.params?.id);
        const newCategory = await SliderModel.findByIdAndUpdate(
            req?.params?.id,
            { $set: req?.body },
            {
                new: true,
                runValidators: true,
            }
        );
        if (category?.pictureId !== newCategory?.pictureId) {
            await pictureDeleter(category?.pictureId)
        }
        res.status(201).json({
            status: 201,
            message: "اسلایدر با موفقیت به روز رسانی شد.",
            data: newCategory,
        });
    }
);
