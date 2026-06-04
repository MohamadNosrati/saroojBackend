import mongoose from "mongoose";
import idPlugin from "../tools/idPlugin.js";
import type { INotificationSchema } from "../types/notifcation.js";
const notificationSchema = new mongoose.Schema<INotificationSchema>(
  {
    title: {
      type: String,
      required: [true, "title field is required"],
      lowercase: true,
      unique: [true, "title filed must be unique!"],
    },
    description: {
      type: String,
      required: [true, "title field is required"],
    },
    url: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

notificationSchema.plugin(idPlugin);


const NotificationModel = mongoose.model("Notification", notificationSchema);

export default NotificationModel;