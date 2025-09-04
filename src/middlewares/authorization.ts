import type { NextFunction, Request, Response } from "express";
import catchAsync from "../tools/catchAsync.js";
import UserModel from "../models/user.js";
import CustomError from "../tools/CustomError.js";
import type { TUserRole } from "../types/user.js";

const authorization = (roles: TUserRole[]) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const user = await UserModel.findById(req.user?.id);
    if (!user) {
      return next(new CustomError(400, "there is no user with id id"));
    }
    req.user = user;
    if (user.role !== "superAdmin" && !roles?.includes(user?.role)) {
      return next(
        new CustomError(403, "you dont have access to this endPoint!")
      );
    }
    next();
  });

export default authorization;
