import type { IUser } from "./user.ts";

declare global {
  namespace Express {
    interface Request {
      user?: Partial<IUser>; // now req.user is allowed
    }
  }
}