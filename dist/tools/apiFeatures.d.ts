import type { Query } from "mongoose";
export declare class ApiFeatures<T> {
    private query;
    private queryString;
    private totalDocuments?;
    constructor(query: Query<T[], T>, queryString: any);
    filtering(): this;
    sorting(): this;
    pagination(): this;
    populate(path: string, select: string[], nested?: {
        path: string;
        select: string[];
    }): this;
    getTotalCount(): Promise<number>;
    execute(): Promise<T[]>;
}
//# sourceMappingURL=apiFeatures.d.ts.map