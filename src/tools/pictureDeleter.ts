import fs from "fs";
import PictureModel from "../models/picture.js";
import type mongoose from "mongoose";

export const unlinkFile = (image?: string) => {
  if (image) {
    fs.unlink(`./uploads/${image}`, (err) => {
      if (err) {
        console.log(err);
      }
    });
  }
};

const pictureDeleter = async (pictureId: mongoose.Schema.Types.ObjectId) => {
  const picture = await PictureModel.findByIdAndDelete(pictureId);
  unlinkFile(picture?.image);
};

export default pictureDeleter;
