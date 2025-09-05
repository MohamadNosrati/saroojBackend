import mongoose from "mongoose";

type IImageType = "before" | "after";

interface IImage {
    type:IImageType;
    pictureId:mongoose.Schema.Types.ObjectId;
}

export interface IProjectSchema {
    title:string;
    description:string;
    Area:number;
    ArtitectureStyle:string;
    categoryId:mongoose.Schema.Types.ObjectId;
    isActive:boolean;
    startDate:Date;
    endDate?:Date;
    createdAt:Date;
    updatedAt:Date;
    images:IImage[];
    pictureId:mongoose.Schema.Types.ObjectId;
}