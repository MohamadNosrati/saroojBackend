import type { NextFunction, Request, Response } from "express";
import type CustomError from "./CustomError.js";

const globalErrorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
    console.log(error)
    if(error.error.isJoi){
        console.log("heeeeeee")
        error.status = 400;
        error.message = error.error.toString()
    }
    const status = error?.status || 500;
    const message = error?.message || "Internal server error!"
    res.status(status).json({
        status: status,
        message: message
    });
}

export default globalErrorHandler;