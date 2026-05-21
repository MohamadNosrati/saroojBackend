import type { NextFunction } from "express";
import type { Model } from "mongoose";
declare const checkExists: (modal: Model<any>, next: NextFunction, itemName: string, id?: string, populate?: string, populateFields?: string[]) => Promise<any>;
export default checkExists;
//# sourceMappingURL=checkExsits.d.ts.map