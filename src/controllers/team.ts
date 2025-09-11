import type { NextFunction, Request, Response } from "express";
import TeamModel from "../models/team.js";
import catchAsync from "../tools/catchAsync.js";
import checkExists from "../tools/checkExsits.js";
import pictureDeleter from "../tools/pictureDeleter.js";

export const createTeamate = catchAsync(async (req: Request, res: Response) => {
  const teamate = await TeamModel.create(req.body);
  res.status(201).json({
    status: 201,
    message: "هم تیمی  با موفقیت صاخته شد.",
    data: teamate,
  });
});

export const getAllTeamates = catchAsync(
  async (req: Request, res: Response) => {
    const teamates = await TeamModel.find().populate("pictureId",["image","id"]);
    console.log(teamates)
    res.status(200).json({
      status: 200,
      message: "لیست اعضای تیم  با موفقیت دریافت شد.",
      data: teamates,
    });
  }
);

export const findTeamate = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const teamate = await checkExists(
      TeamModel,
      next,
      "دسته بندی",
      req.params?.id,
      "Picture",
      ["image", "id"]
    );
    res.status(201).json({
      status: 201,
      message: "هم تیمی با موفقیت دریافت شد",
      data: teamate,
    });
  }
);

export const deleteTeamate = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    await checkExists(TeamModel, next, "دسته بندی", req.params?.id);
    await TeamModel.findByIdAndDelete(req.params?.id);
    res.status(201).json({
      status: 201,
      message: "هم تمی با موفقیت پاک شد.",
    });
  }
);

export const updateTeamate = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const teamate = await checkExists(TeamModel, next,"دسته بندی", req.params?.id);
    const newTeamte = await TeamModel.findByIdAndUpdate(
      req.params?.id,
      {
        $set: req.body,
      },
      {
        new: true,
        runValidators: true,
      }
    );
    if (teamate?.pictureId !== newTeamte?.pictureId) {
      pictureDeleter(teamate?.pictureId);
    }
    res.status(201).json({
      status: 201,
      message: "هم تیمی با موفقیت به روز رسانی شد.",
      data: newTeamte,
    });
  }
);
