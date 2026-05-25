import type mongoose from "mongoose";

export interface IBlogSchema {
    title:string;
    description:string;
    isActive:boolean;
    pictureId:mongoose.Schema.Types.ObjectId;
    alt:string;
    createdAt:Date;
    updatedAt:Date;
    link:string;
}