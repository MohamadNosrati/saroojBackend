import mongoose from "mongoose";
import type { IBlogSchema } from "../types/blog.js";
declare const BlogModel: mongoose.Model<IBlogSchema, {}, {}, {}, mongoose.Document<unknown, {}, IBlogSchema, {}, mongoose.DefaultSchemaOptions> & IBlogSchema & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<IBlogSchema, mongoose.Model<IBlogSchema, any, any, any, mongoose.Document<unknown, any, IBlogSchema, any, {}> & IBlogSchema & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, IBlogSchema, mongoose.Document<unknown, {}, mongoose.FlatRecord<IBlogSchema>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<IBlogSchema> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default BlogModel;
//# sourceMappingURL=blog.d.ts.map