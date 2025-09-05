import mongoose from "mongoose";
import type { ICategorySchema } from "../types/category.js";
import idPlugin from "../tools/idPlugin.js";
import PictureModel from "./picture.js";
import fs from "fs";
import CustomError from "../tools/CustomError.js";
import pictureDeleter from "../tools/pictureDeleter.js";
const categorySchema = new mongoose.Schema<ICategorySchema>(
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
    versionKey: false,
  }
);

categorySchema.plugin(idPlugin);
categorySchema.pre("findOneAndDelete", async function (next) {
  const filter = this.getFilter();
  const doc = await this.model.findOne(filter);
  if (doc) {
    await pictureDeleter(doc?.pictureId);
  }
  next();
});

const CategoryModel = mongoose.model("Category", categorySchema);

export default CategoryModel;
