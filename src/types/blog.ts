import type mongoose from "mongoose";

export interface IBlogSchema {
  title: string;
  description: string;
  descriptionEn?: string;
  altEn?: string;
  titleEn?: string;
  isActive: boolean;
  pictureId: mongoose.Schema.Types.ObjectId;
  alt: string;
  createdAt: Date;
  updatedAt: Date;
  userId: mongoose.Schema.Types.ObjectId;
}
