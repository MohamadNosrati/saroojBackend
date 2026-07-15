import PictureModel from "../models/picture.js";
import type mongoose from "mongoose";

import fs from "fs/promises";
import path from "path";

export const unlinkFile = async (image?: string) => {
  if (!image) return;

  const filePath = path.join(process.cwd(), "uploads", image);

  try {
    await fs.unlink(filePath);
  } catch (err: any) {
    if (err.code !== "ENOENT") {
      console.error("Failed to delete file:", err);
    }
  }
};

const pictureDeleter = async (pictureId: mongoose.Schema.Types.ObjectId) => {
  const picture = await PictureModel.findByIdAndDelete(pictureId);
  unlinkFile(picture?.image);
};

export default pictureDeleter;
