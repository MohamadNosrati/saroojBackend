export class ApiFeatures {
    query; // Mongoose query object
    queryString;
    totalDocuments; // URL query params (req.query)
    constructor(query, queryString) {
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
            console.log("isAsc", isDesc);
            this.query = this.query.sort(isDesc ? `-${this.queryString.sort}` : this.queryString.sort);
        }
        else {
            this.query = this.query.sort('createdAt');
        }
        return this;
    }
    pagination() {
        if (this.queryString?.page && this.queryString?.limit) {
            const page = parseInt(this.queryString.page);
            const limit = parseInt(this.queryString.limit);
            const skip = (page - 1) * limit;
            this.query = this.query.skip(skip).limit(limit);
        }
        return this;
    }
    populate(path, select, nested) {
        if (nested) {
            this.query = this.query.populate([
                {
                    path: path,
                    select: select,
                    populate: {
                        path: nested?.path,
                        select: nested?.select
                    }
                }
            ]);
        }
        else {
            this.query = this.query.populate(path, select);
        }
        return this;
    }
    async getTotalCount() {
        const countQuery = this.query.clone();
        this.totalDocuments = await countQuery.countDocuments();
        return this.totalDocuments;
    }
    execute() {
        return this.query;
    }
}
//# sourceMappingURL=apiFeatures.js.map