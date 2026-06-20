import mongoose from "mongoose";
import idPlugin from "../tools/idPlugin.js";
const notificationSchema = new mongoose.Schema({
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
}, {
    timestamps: true,
    versionKey: false,
});
notificationSchema.plugin(idPlugin);
const NotificationModel = mongoose.model("Notification", notificationSchema);
export default NotificationModel;
//# sourceMappingURL=notification.js.map