import mongoose from "mongoose";
import idPlugin from "../tools/idPlugin.js";
import pictureDeleter from "../tools/pictureDeleter.js";
import type { ISliderSchema } from "../types/slider.js";
const sliderSchema = new mongoose.Schema<ISliderSchema>(
  {
    title: {
      type: String,
      lowercase: true,
    },
    titleEn: {
      type: String,
      lowercase: true,
    },
    link: {
      type: String,
    },
    alt: {
      type: String,
      required: [true, "title field is required"],
    },
    altEn: {
      type: String,
    },
    description: {
      type: String,
    },
    descriptionEn: {
      type: String,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    pictureId: {
      type: mongoose.Types.ObjectId,
      ref: "Picture",
    },
    mobilePictureId: {
      type: mongoose.Types.ObjectId,
      ref: "Picture",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

sliderSchema.plugin(idPlugin);
sliderSchema.pre("findOneAndDelete", async function (next) {
  const filter = this.getFilter();
  const doc = await this.model.findOne(filter);
  if (doc) {
    await pictureDeleter(doc?.pictureId);
    await pictureDeleter(doc?.mobilePictureId);
  }
  next();
});

const SliderModel = mongoose.model("Slider", sliderSchema);

export default SliderModel;
