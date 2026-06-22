import type { NextFunction, Request, Response } from "express";
import catchAsync from "../tools/catchAsync.js";
import checkExists from "../tools/checkExsits.js";
import pictureDeleter from "../tools/pictureDeleter.js";
import SliderModel from "../models/slider.js";
// import { translator } from "../services/translator.js";

export const createSlider = catchAsync(async (req: Request, res: Response) => {
  const slider = await SliderModel.create(req.body);
  res.status(201).json({
    status: 201,
    message: "اسلایدر با موفقیت صاخته شد.",
    data: slider,
  });
});

export const getAllSliders = catchAsync(async (req: Request, res: Response) => {
  const sliders = await SliderModel.find()
    .populate("pictureId", ["image", "id"])
    .populate("mobilePictureId", ["image", "id"]);
  res.status(200).json({
    status: 200,
    message: "لیست اسلایدر ها با موفقیت دریافت شد.",
    data: sliders,
  });
});

export const findSlider = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    await checkExists(SliderModel, next, "اسلایدر", req.params?.id);
    const slider = await SliderModel.findById(req?.params?.id)
      ?.populate("pictureId", ["image", "id"])
      ?.populate("mobilePictureId", ["image", "id"]);

      console.log("slider",slider)
    res.status(201).json({
      status: 201,
      message: "اسلایدر با موفقیت دریافت شد",
      data: slider,
    });
  },
);

export const deleteSlider = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    await checkExists(SliderModel, next, "اسلایدر", req.params?.id);
    await SliderModel.findByIdAndDelete(req.params?.id);
    res.status(201).json({
      status: 201,
      message: "اسلایدر با موفقیت پاک شد.",
    });
  },
);

export const updateSlider = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const slider = await checkExists(
      SliderModel,
      next,
      "اسلایدر",
      req.params?.id,
    );
    const newSlider = await SliderModel.findByIdAndUpdate(
      req?.params?.id,
      { $set: req?.body },
      {
        new: true,
        runValidators: true,
      },
    );
    if (
      slider?.pictureId?.toString() !== newSlider?.pictureId?.toString()
    ) {
      await pictureDeleter(slider?.pictureId);
    }
    if (
      slider?.mobilePictureId?.toString() !== newSlider?.mobilePictureId?.toString()
    ) {
      await pictureDeleter(slider?.mobilePictureId);
    }
    res.status(201).json({
      status: 201,
      message: "اسلایدر با موفقیت به روز رسانی شد.",
      data: newSlider,
    });
  },
);
