import type mongoose from "mongoose";

export interface IPicture {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  destination: string;
  filename: string;
  path: string;
  size: 1705938;
}

export interface IPopulatedPicture {
  image: string;
  id: mongoose.Schema.Types.ObjectId;
}
