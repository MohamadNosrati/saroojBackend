import type { NextFunction, Request, Response } from "express";
type Fn = (req: Request, res: Response, next: NextFunction) => Promise<any>;
declare const catchAsync: (fn: Fn) => (req: Request, res: Response, next: NextFunction) => Promise<any>;
export default catchAsync;
//# sourceMappingURL=catchAsync.d.ts.map