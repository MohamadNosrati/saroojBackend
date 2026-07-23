import mongoose, { Document } from "mongoose";

interface IImage {
  name: string;
  pictureId: mongoose.Schema.Types.ObjectId;
}
interface IImageEn {
  nameEn: string;
  pictureIdEn: mongoose.Schema.Types.ObjectId;
}
interface IStep {
  name: string;
  pictureId: mongoose.Schema.Types.ObjectId;
  alt: string;
  description: string;
  isActive: string;
  video?: string;
}
interface IStepEn {
  nameEn: string;
  pictureIdEn: mongoose.Schema.Types.ObjectId;
  altEn: string;
  descriptionEn: string;
  isActiveEn: string;
  videoEn?: string;
}

export interface IBFImage {
  before: IImage;
  after?: IImage;
}
export interface IBFImageEn {
  beforeEn: IImageEn;
  afterEn?: IImageEn;
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
  imagesEn: IBFImageEn[];
  pictureId: mongoose.Schema.Types.ObjectId;
  address: string;
  addressEn?: string;
  steps: IStep[];
  stepsEn: IStepEn[];
  video?: string;
}
