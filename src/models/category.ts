import mongoose from "mongoose";
import type { ICategorySchema } from "../types/category.js";

const categorySchema = new mongoose.Schema<ICategorySchema>(
  {
    title: {
      type: String,
      required: [true, "title field is required"],
    },
    description: {
      type: String,
      required: [true, "description field is required"],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    pictureId:{
      type: mongoose.Types.ObjectId,
      ref: "Picture"
    }
    
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

const CategoryModel = mongoose.model("Category", categorySchema);

export default CategoryModel;
