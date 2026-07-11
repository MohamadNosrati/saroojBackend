import type { Request, Response } from "express";
import catchAsync from "../tools/catchAsync.js";
import AssistantModel from "../models/assistant.js";

export const CreateAssitantMessage = catchAsync(
  async (req: Request, res: Response) => {
    const assitantMessage = await AssistantModel.create(req?.body);
    res.status(201).json({
      status: 201,
      message: "پیام دستیار با موفقیت صاخته شد.",
      data: assitantMessage,
    });
  },
);

export const getSessionAssistantMessages = catchAsync(
  async (req: Request, res: Response) => {
    const sessionIdMessages = await AssistantModel.find().where(
      "sessionId",
      req?.params?.sessionId,
    );
    res.status(200).json({
      status: 200,
      message: "لیست پیام های دستیار با موفقیت دریافت شد.",
      data: sessionIdMessages,
    });
  },
);
