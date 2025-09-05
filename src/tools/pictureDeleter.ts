import fs from "fs";
import PictureModel from "../models/picture.js";
import type mongoose from "mongoose";

const pictureDeleter = async (pictureId:mongoose.Schema.Types.ObjectId) => {
  const picture = await PictureModel.findByIdAndDelete(pictureId);
  fs.unlink(`./uploads/${picture?.image}`, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

export default pictureDeleter;
