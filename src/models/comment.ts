import mongoose from "mongoose";
import type { ICommentSchema } from "../types/comment.js";
import idPlugin from "../tools/idPlugin.js";

const commentSchema = new mongoose.Schema<ICommentSchema>(
  {
    fullName: {
      type: String,
      required: [true, "fullName field is required"],
      lowercase: true
    },
    text: {
      type: String,
      required: [true, "text field is required"],
    },
    email: {
      type: String,
      required: [true, "email field is required"],
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      enum: ["persian", "english"],
      required: [true, "type field is required"],
    }
  },
  {
    versionKey:false,
    timestamps: true,
  }
);

commentSchema.plugin(idPlugin)

const CommentModel = mongoose.model("Comment", commentSchema);

export default CommentModel;
