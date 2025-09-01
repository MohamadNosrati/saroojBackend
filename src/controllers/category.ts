import type { Request, Response } from "express";

export const createCategory = (req:Request,res:Response)=>{
    res.status(201).json({
        status:201,
        message:"دسته یندی با موفقیت صاخته شد.",
        data:""
    })
}

export const getAllCategorys = (req:Request,res:Response)=>{
    res.status(201).json({
        status:201,
        message:"لیست دسته یندی ها با موفقیت دریافت شد.",
        data:""
    })
}

export const findCategory = (req:Request,res:Response)=>{
    res.status(201).json({
        status:201,
        message:"پروژه با موفقیت دریافت شد",
        data:""
    })
}


export const deleteCategory = (req:Request,res:Response)=>{
    res.status(201).json({
        status:201,
        message:"دسته یندی با موفقیت پاک شد.",
        data:""
    })
}


export const updateCategory = (req:Request,res:Response)=>{
    res.status(201).json({
        status:201,
        message:"دسته یندی با موفقیت به روز رسانی شد.",
        data:""
    })
}