import type { Request, Response } from "express";

export const createTeam = (req:Request,res:Response)=>{
    res.status(201).json({
        status:201,
        message:"دسته یندی با موفقیت صاخته شد.",
        data:""
    })
}

export const getAllTeams = (req:Request,res:Response)=>{
    res.status(201).json({
        status:201,
        message:"لیست دسته یندی ها با موفقیت دریافت شد.",
        data:""
    })
}

export const findTeam = (req:Request,res:Response)=>{
    res.status(201).json({
        status:201,
        message:"پروژه با موفقیت دریافت شد",
        data:""
    })
}


export const deleteTeam = (req:Request,res:Response)=>{
    res.status(201).json({
        status:201,
        message:"دسته یندی با موفقیت پاک شد.",
        data:""
    })
}


export const updateTeam = (req:Request,res:Response)=>{
    res.status(201).json({
        status:201,
        message:"دسته یندی با موفقیت به روز رسانی شد.",
        data:""
    })
}