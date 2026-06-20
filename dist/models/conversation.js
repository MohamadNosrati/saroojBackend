import mongoose, { Mongoose } from "mongoose";
import idPlugin from "../tools/idPlugin.js";
const conversationSchema = new mongoose.Schema({
    participants: [
        { type: mongoose.Schema.Types.ObjectId, ref: "User", index: true },
    ],
    type: {
        type: String,
        enum: ["private", "group", "channel"],
        default: "private",
    },
    groupName: { type: String },
    groupAvatar: { type: String },
    adminIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    lastMessage: {
        content: { type: String },
        senderId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        timestamp: { type: Date },
        type: { type: String },
    },
    unreadCounts: [
        {
            userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
            count: { type: Number, default: 0 },
        },
    ],
}, {
    timestamps: true,
    versionKey: false,
});
conversationSchema.index({ participants: 1, updatedAt: -1 });
conversationSchema.plugin(idPlugin);
const ConversationModel = mongoose.model("Conversation", conversationSchema);
export default ConversationModel;
//# sourceMappingURL=conversation.js.map