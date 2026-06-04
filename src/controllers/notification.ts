import type { NextFunction, Request, Response } from "express";
import catchAsync from "../tools/catchAsync.js";
import SubscriptionModel from "../models/subscription.js";
import webPush from "web-push";
import NotificationModel from "../models/notification.js";

export const getAllNotifications = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const notifications = await NotificationModel.find();;
    res.status(200).json({
      status: 200,
      message: "لیست  نوتیفیکیشن ها با موفقیت دریافت شد.",
      data: notifications,
    });
  }
);

export const sendNotificationToSubscriptions = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const subscriptions = await SubscriptionModel.find();
    const test = subscriptions[0];
    await webPush.sendNotification(
      {
        endpoint: test?.endpoint as string,
        keys: {
          auth: test?.keys?.auth as string,
          p256dh: test?.keys?.p256dh as string,
        }
      },
      JSON.stringify({
        title: req?.body?.title,
        body: req?.body?.description,
        url: req?.body?.url || "/",
      })
    );

    const notification = await NotificationModel.create(req?.body);
    res.status(201).json({
      status: 201,
      message: "نوتیفیکیشن با موفقیت ارسال شد.",
      data:notification
    });
  }
);