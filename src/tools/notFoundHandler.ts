import type { NextFunction, Request, Response } from "express";
import CustomError from "./CustomError.js";

const notFoundErrorHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return next(new CustomError(404, `route ${req.originalUrl} not found!`));
};

export default notFoundErrorHandler;
