import mongoose from "mongoose";
import idPlugin from "../tools/idPlugin.js";
const keysSchema = new mongoose.Schema({
    auth: {
        type: String,
        required: [true, "auth field is required"],
    },
    p256dh: {
        type: String,
        required: [true, "auth field is required"],
    },
}, {
    versionKey: false,
});
const subscriptionSchema = new mongoose.Schema({
    endpoint: {
        type: String,
        required: [true, "endpoint field is required"],
    },
    expirationTime: {
        type: Number,
    },
    keys: keysSchema,
}, {
    timestamps: true,
    versionKey: false,
});
subscriptionSchema.plugin(idPlugin);
const SubscriptionModel = mongoose.model("Subscription", subscriptionSchema);
export default SubscriptionModel;
//# sourceMappingURL=subscription.js.map