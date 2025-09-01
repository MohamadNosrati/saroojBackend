import mongoose from "mongoose";

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
}