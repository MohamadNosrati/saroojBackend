import mongoose from "mongoose";
import type { IProjectSchema } from "../types/project.js";
import idPlugin from "../tools/idPlugin.js";
import pictureDeleter from "../tools/pictureDeleter.js";

const beforeAfterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "image name is required!"],
  },
  type: {
    type: String,
    required: [true, "image type is required!"],
    enum: {
      values: ["before", "after"],
      message: "image type can only be before or after",
    },
  },
  pictureId: {
    type: mongoose.Types.ObjectId,
    required: [true, "image PictureId is required!"],
    ref: "Picture",
  },
});

const projectSchema = new mongoose.Schema<IProjectSchema>(
  {
    title: {
      type: String,
      required: [true, "title field is required"],
      lowercase: true,
    },
    description: {
      type: String,
      required: [true, "description field is required"],
    },
    area: {
      type: Number,
      required: [true, "area field is required"],
    },
    artitectureStyle: {
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
    pictureId: {
      type: mongoose.Types.ObjectId,
      required: [true, "picture id field is required!"],
      ref: "Picture",
    },
    images: [beforeAfterSchema],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

projectSchema.plugin(idPlugin);
projectSchema.pre("findOneAndDelete", async function (next) {
  const filter = this.getFilter();
  const doc = await this.model.findOne(filter);
  if (doc) {
    await pictureDeleter(doc?.pictureId);
  }
  next();
});

const ProjectModel = mongoose.model("Project", projectSchema);

export default ProjectModel;
