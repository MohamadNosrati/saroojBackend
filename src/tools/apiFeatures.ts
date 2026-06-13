import type { Query } from "mongoose";

export class ApiFeatures<T> {
    private query: Query<T[], T>;  // Mongoose query object
    private queryString: any;
    private totalDocuments?: number;     // URL query params (req.query)

    constructor(query: Query<T[], T>, queryString: any) {
        this.query = query;
        this.queryString = queryString;
    }


    filtering() {
        const queryObj = { ...this.queryString };
        const excludedFields = ['page', 'sort', 'limit', 'fields', 'asc'];
        excludedFields.forEach(el => delete queryObj[el]);

        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);

        this.query = this.query.find(JSON.parse(queryStr));
        return this;
    }

    sorting() {
        if (this.queryString.sort) {
            const isDesc = this.queryString?.asc === "false";
            console.log("isAsc", isDesc)
            this.query = this.query.sort(isDesc ? `-${this.queryString.sort}` : this.queryString.sort);
        } else {
            this.query = this.query.sort('createdAt');
        }
        return this;
    }

    pagination() {
        if (this.queryString?.page && this.queryString?.limit) {
            const page = parseInt(this.queryString.page as string);
            const limit = parseInt(this.queryString.limit as string);
            const skip = (page - 1) * limit;
            this.query = this.query.skip(skip).limit(limit);
        }
        return this;
    }

    populate(path: string, select: string[], nested?: {
        path: string;
        select: string[];
    }): this {
        if (nested) {
            this.query = this.query.populate([
                {
                    path: path,
                    select: select,
                    populate: {
                        path: nested?.path as string,
                        select: nested?.select as string[]
                    }
                }
            ]);
        } else {
            this.query = this.query.populate(path, select);
        }
        return this;
    }

    async getTotalCount(): Promise<number> {
        const countQuery = this.query.clone();
        this.totalDocuments = await countQuery.countDocuments();
        return this.totalDocuments;
    }



    execute(): Promise<T[]> {
        return this.query;
    }

}
