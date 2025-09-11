import type { NextFunction, Request, Response } from "express";

const globalErrorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
    if(error?.error && error.error.isJoi){
        error.status = 400;
        error.message = error.error.toString()
    }
    console.log(error)
    const status = error?.status || 500;
    const message = error?.message || "Internal server error!"
    res.status(status).json({
        status: status,
        message: message
    });
}

export default globalErrorHandler;