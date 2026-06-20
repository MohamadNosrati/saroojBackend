import type { NextFunction } from "express";
import type { Model } from "mongoose";
export declare const checkUnique: (model: Model<any>, next: NextFunction, key: string, value: string, entityName: string) => Promise<void>;
//# sourceMappingURL=checkUnique.d.ts.map