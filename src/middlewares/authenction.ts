import type { NextFunction, Request, Response } from "express";
import catchAsync from "../tools/catchAsync.js";

const authentication = catchAsync(async(req:Request,res:Response,next:NextFunction)=>{
    next()
})