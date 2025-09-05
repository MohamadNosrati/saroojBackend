import mongoose from "mongoose";
import type { IProjectSchema } from "../types/project.js";
import idPlugin from "../tools/idPlugin.js";

const projectSchema = new mongoose.Schema<IProjectSchema>(
  {
    title: {
      type: String,
      required: [true, "title field is required"],
      lowercase: true
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
    pictureId:{
      type:mongoose.Types.ObjectId,
      required:[true,"picture id field is required!"],
      ref:"Picture"
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

projectSchema.plugin(idPlugin)

const ProjectModel = mongoose.model("Project", projectSchema);

export default ProjectModel;
