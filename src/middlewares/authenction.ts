import type { NextFunction, Request, Response } from "express";
import catchAsync from "../tools/catchAsync.js";
import CustomError from "../tools/CustomError.js";
import jwt, { type JwtPayload, type VerifyErrors } from "jsonwebtoken";

const authentication = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    if (!req.headers.authorization) {
      return next(new CustomError(403, "login please!"));
    }
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return next(new CustomError(403, "login please!"));
    }
    jwt.verify(
      token,
      process.env.JWTSECRETKEY as string,
      (err: VerifyErrors | null, decoded: JwtPayload | undefined | string) => {
        if (err) {
          return next(
            new CustomError(403, "your token is expired login please!")
          );
        }
        if (decoded && typeof decoded === "object" && decoded?.id) {
          req.user = {
            id: decoded?.id,
          };
        }
      }
    );
    next();
  }
);

export default authentication;
