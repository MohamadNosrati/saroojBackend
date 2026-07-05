import mongoose from "mongoose";

export interface ITeamate {
    title:string;
    titleEn?:string;
    position:string;
    positionEn?:string;
    description:string;
    descriptionEn?:string;
    isActive:boolean;
    pictureId:mongoose.Schema.Types.ObjectId;
    createdAt:Date;
    updatedAt:Date;
    alt:string;
    altEn?:string;
    telegram?:string;
    instagram?:string;
}