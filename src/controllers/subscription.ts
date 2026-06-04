import type { Request, Response } from "express";
import SubscriptionModel from "../models/subscription.js";
import catchAsync from "../tools/catchAsync.js";

export const getAllSubscriptions = catchAsync(async (req: Request, res: Response) => {
  const slider = await SubscriptionModel.find();
  res.status(200).json({
    status: 200,
    message: "سابسکرپشن با موفقیت صاخته شد.",
    data: slider,
  });
});

export const createSubscription = catchAsync(async (req: Request, res: Response) => {
  const slider = await SubscriptionModel.create(req.body);
  res.status(201).json({
    status: 201,
    message: "سابسکرپشن با موفقیت صاخته شد.",
    data: slider,
  });
});