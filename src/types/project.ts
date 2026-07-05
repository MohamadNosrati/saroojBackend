import mongoose, { Document } from "mongoose";

interface IImage {
  name: string;
  nameEn?: string;
  pictureId: mongoose.Schema.Types.ObjectId;
}
interface IStep {
  name: string;
  nameEn?: string;
  pictureId: mongoose.Schema.Types.ObjectId;
  alt: string;
  altEn?: string;
  description: string;
  descriptionEn?: string;
  isActive: string;
  video?: string;
}

export interface IBFImage {
  before: IImage;
  after?: IImage;
}

export interface IProjectSchema {
  title: string;
  description: string;
  area: number;
  descriptionEn?: string;
  altEn?: string;
  titleEn?: string;
  alt: string;
  artitectureStyle?: string;
  artitectureStyleEn?: string;
  categoryId: mongoose.Schema.Types.ObjectId;
  isActive: boolean;
  startDate: Date;
  endDate?: Date;
  createdAt: Date;
  updatedAt: Date;
  images: IBFImage[];
  pictureId: mongoose.Schema.Types.ObjectId;
  address: string;
  addressEn?: string;
  steps: IStep[];
  video?: string;
}
