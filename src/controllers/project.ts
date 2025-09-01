import type { Request, Response } from "express";

export const createProject = (req:Request,res:Response)=>{
    res.status(201).json({
        status:201,
        message:"پروزه با موفقیت صاخته شد.",
        data:""
    })
}

export const getAllProjects = (req:Request,res:Response)=>{
    res.status(201).json({
        status:201,
        message:"لیست پروزه ها با موفقیت دریافت شد.",
        data:""
    })
}

export const findProject = (req:Request,res:Response)=>{
    res.status(201).json({
        status:201,
        message:"پروژه با موفقیت دریافت شد",
        data:""
    })
}


export const deleteProject = (req:Request,res:Response)=>{
    res.status(201).json({
        status:201,
        message:"پروزه با موفقیت پاک شد.",
        data:""
    })
}


export const updateProject = (req:Request,res:Response)=>{
    res.status(201).json({
        status:201,
        message:"پروزه با موفقیت به روز رسانی شد.",
        data:""
    })
}