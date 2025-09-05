import mongoose from "mongoose";
import type { ITeamate } from "../types/team.js";

const teamsSchema = new mongoose.Schema<ITeamate>(
  {
    title: {
      type: String,
      required: [true, "title field is required"],
      lowercase: true,
    },
    position: {
      type: String,
      required: [true, "position field is required"],
      lowercase: true,
    },
    description: {
      type: String,
      required: [true, "description field is required"],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    pictureId: {
      type: mongoose.Types.ObjectId,
      ref: "Picture",
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

const TeamModel = mongoose.model("Category", teamsSchema);

export default TeamModel;
