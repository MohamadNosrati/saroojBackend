import mongoose from "mongoose";
import idPlugin from "../tools/idPlugin.js";
import pictureDeleter from "../tools/pictureDeleter.js";
import type { IBlogSchema } from "../types/blog.js";
const blogSchema = new mongoose.Schema<IBlogSchema>(
  {
    title: {
      type: String,
      required: [true, "title field is required"],
      lowercase: true,
      unique: [true, "title filed must be unique!"],
    },
    alt: {
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
    pictureId: {
      type: mongoose.Types.ObjectId,
      ref: "Picture",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

blogSchema.plugin(idPlugin);
blogSchema.pre("findOneAndDelete", async function (next) {
  const filter = this.getFilter();
  const doc = await this.model.findOne(filter);
  if (doc) {
    await pictureDeleter(doc?.pictureId);
  }
  next();
});

const BlogModel = mongoose.model("Blog", blogSchema);

export default BlogModel;
