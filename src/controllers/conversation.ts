import type { NextFunction, Request, Response } from "express";
import catchAsync from "../tools/catchAsync.js";
import ConversationModel from "../models/conversation.js";
import { ApiFeatures } from "../tools/apiFeatures.js";
import type { IConversation } from "../types/conversation.js";

export const getUserConversations = catchAsync(
  async (req: Request, res: Response) => {
    console.log(req?.query)
    const query = new ApiFeatures<IConversation>(ConversationModel.find(), req?.query);
    const conversations = await query.filtering().populate("participants", ["userName", "id"], {
      path: "pictureId",
      select: ["image", "id"]
    }).execute();
    res.status(200).json({
      status: 200,
      message: "لیست دسته یندی ها با موفقیت دریافت شد.",
      data: conversations,
    });
  }
);
