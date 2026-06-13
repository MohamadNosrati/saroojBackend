import mongoose from "mongoose";
import idPlugin from "../tools/idPlugin.js";
import type { IMessage } from "../types/message.js";


const messageSchema = new mongoose.Schema<IMessage>(
  {
    // Identifiers
    // roomId: { type: String, required: true, index: true },
    conversationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Conversation",
      index: true,
    },

    // Sender info
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    senderName: { type: String }, // Denormalized for quick display
    senderAvatar: { type: String }, // Denormalized

    // Message content
    content: { type: String, required: true },
    type: {
      type: String,
      enum: [
        "text",
        "image",
        "video",
        "file",
        "audio",
        "location",
        "system",
        "deleted",
      ],
    },

    // Media attachments
    attachments: [
      {
        url: { type: String },
        type: { type: String },
        name: { type: String },
        size: { type: Number },
        mimeType: { type: String },
      },
    ],

    // Message status (for each recipient)
    status: { type: String, required: true },

    // Reactions
    reactions: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        reaction: { type: String, emoji: true },
        timestamp: { type: Date, default: Date.now },
      },
    ],

    // Reply to feature
    replyTo: {
      messageId: { type: mongoose.Schema.Types.ObjectId, ref: "Message" },
      content: { type: String }, // Denormalized for quick display
    },

    // Editing
    edited: { type: Boolean, default: false },
    editedAt: { type: Date },
    editHistory: [
      {
        content: { type: String },
        editedAt: { type: Date, default: Date.now },
      },
    ],

    // Deletion
    deleted: { type: Boolean, default: false },
    deletedFor: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Soft delete per user
    deletedAt: { type: Date },

    // Metadata
    metadata: {
      ip: { type: String },
      userAgent: { type: String },
      platform: { type: String },
    },
  },
  {
    timestamps: true, // Mongoose auto timestamps
  },
);

// Indexes for performance
messageSchema.index({ roomId: 1, createdAt: -1 });
messageSchema.index({ senderId: 1, createdAt: -1 });
messageSchema.index({ conversationId: 1, createdAt: -1 });
messageSchema.index({ "status.read": 1 }); // For unread counts
messageSchema.index({ createdAt: 1 }, { expireAfterSeconds: 2592000 }); // Auto-delete after 30
//
messageSchema.plugin(idPlugin);

export const MessageModel = mongoose.model("Message", messageSchema);

export default MessageModel;
