import mongoose from "mongoose";
import type { IProjectSchema } from "../types/project.js";

const projectSchema = new mongoose.Schema<IProjectSchema>(
  {
    title: {
      type: String,
      required: [true, "title field is required"],
    },
    description: {
      type: String,
      required: [true, "description field is required"],
    },
    Area: {
      type: Number,
      required: [true, "area field is required"],
    },
    ArtitectureStyle: {
      type: String,
      required: [true, "ArtitectureStyle field is required"],
    },
    startDate: {
      type: Date,
      required: [true, "start date field is required"],
    },
    endDate: {
      type: Date,
    },
    categoryId: {
      type: mongoose.Types.ObjectId,
      required: [true, "categoryId field is required"],
      ref: "Category",
    },
    isActive: {
      type: Boolean,
      default: true,
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

const ProjectModel = mongoose.model("Project", projectSchema);

export default ProjectModel;
