import mongoose from "mongoose";
import idPlugin from "../tools/idPlugin.js";
import type { IKeys, ISubscription } from "../types/subscription.js";

const keysSchema = new mongoose.Schema<IKeys>(
  {
    auth: {
      type: String,
      required: [true, "auth field is required"],
    },
    p256dh: {
      type: String,
      required: [true, "auth field is required"],
    },
  },
  {
    versionKey: false,
  },
);

const subscriptionSchema = new mongoose.Schema<ISubscription>(
  {
    endpoint: {
      type: String,
      required: [true, "endpoint field is required"],
    },
    expirationTime: {
      type: Number,
    },
    keys: keysSchema,
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

subscriptionSchema.plugin(idPlugin);


const SubscriptionModel = mongoose.model("Subscription", subscriptionSchema);

export default SubscriptionModel;
