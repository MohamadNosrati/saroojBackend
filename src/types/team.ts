import mongoose from "mongoose";

export interface ITeamate {
    title:string;
    position:string;
    description:string;
    isActive:boolean;
    pictureId:mongoose.Schema.Types.ObjectId;
    createdAt:Date;
    updatedAt:Date;
}