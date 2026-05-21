import mongoose from "mongoose";

export interface ICategorySchema {
    title:string;
    description:string;
    isActive:boolean;
    pictureId:mongoose.Schema.Types.ObjectId;
    alt:string;
    createdAt:Date;
    updatedAt:Date;

}