import type { NextFunction, Request, Response } from "express";
import type { TUserRole } from "../types/user.js";
declare const authorization: (roles: TUserRole[]) => (req: Request, res: Response, next: NextFunction) => Promise<any>;
export default authorization;
//# sourceMappingURL=authorization.d.ts.map