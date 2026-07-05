import mongoose from "mongoose";

export interface ISliderSchema {
    title:string;
    titleEn:string;
    description:string;
    descriptionEn:string;
    isActive:boolean;
    pictureId:mongoose.Schema.Types.ObjectId;
    mobilePictureId:mongoose.Schema.Types.ObjectId;
    alt:string;
    altEn:string;
    createdAt:Date;
    updatedAt:Date;
    link:string;
    linkEn?:string;
}