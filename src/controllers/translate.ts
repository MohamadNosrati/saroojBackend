import type { Request, Response } from "express";
import catchAsync from "../tools/catchAsync.js";
import { translator } from "../services/translator.js";

export const translate = catchAsync(
  async (req: Request, res: Response, next) => {
    const data = await translator(req?.body);
    res.status(201).json({
      status: 201,
      message: "عملیات ترجمه هوش مصنوعی با موفقیت انجام شد.",
      data: data,
    });
  },
);
