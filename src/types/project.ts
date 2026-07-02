import mongoose, { Document } from "mongoose";

interface IImage {
  name: string;
  pictureId: mongoose.Schema.Types.ObjectId;
}
interface IStep {
  name: string;
  pictureId: mongoose.Schema.Types.ObjectId;
  alt: string;
  description: string;
  isActive: string;
  video?:string;
}

export interface IBFImage {
  before: IImage;
  after?: IImage;
}

export interface IProjectSchema {
  title: string;
  description: string;
  area: number;
  alt: string;
  artitectureStyle?: string;
  categoryId: mongoose.Schema.Types.ObjectId;
  isActive: boolean;
  startDate: Date;
  endDate?: Date;
  createdAt: Date;
  updatedAt: Date;
  images: IBFImage[];
  pictureId: mongoose.Schema.Types.ObjectId;
  address: string;
  steps: IStep[];
  video?:string;
}
