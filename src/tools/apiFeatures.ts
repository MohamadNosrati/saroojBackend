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
        const excludedFields = ['page', 'sort', 'limit', 'fields'];
        excludedFields.forEach(el => delete queryObj[el]);

        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);

        this.query = this.query.find(JSON.parse(queryStr));
        return this;
    }

    sorting() {
        if (this.queryString.sort) {
            const sortBy = (this.queryString.sort as string).split(',').join(' ');
            this.query = this.query.sort(sortBy);
        } else {
            this.query = this.query.sort('-createdAt');
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

    populate(path: string, select?: string[]): this {
        if (select) {
            this.query = this.query.populate(path, select);
        } else {
            this.query = this.query.populate(path);
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
