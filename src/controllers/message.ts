import type { NextFunction, Request, Response } from "express";
import catchAsync from "../tools/catchAsync.js";
import { ApiFeatures } from "../tools/apiFeatures.js";
import type { IMessage } from "../types/message.js";
import MessageModel from "../models/message.js";

export const getAllMessages = catchAsync(
  async (req: Request, res: Response) => {
  const query = new ApiFeatures<IMessage>(MessageModel.find(), req?.query);
    const messages = await query.filtering().execute();
    res.status(200).json({
      status: 200,
      message: "لیست پیام ها با موفقیت دریافت شد.",
      data: messages,
    });
  }
);
