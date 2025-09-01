import type { NextFunction, Request, Response } from "express";

type Fn = (req:Request,res:Response,next:NextFunction)=>Promise<any>;

const catchAsync = (fn:Fn)=>{
    return (req:Request,res:Response,next:NextFunction)=>fn(req,res,next).catch(next)
}

export default catchAsync;