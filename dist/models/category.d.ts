import mongoose from "mongoose";
import type { ICategorySchema } from "../types/category.js";
declare const CategoryModel: mongoose.Model<ICategorySchema, {}, {}, {}, mongoose.Document<unknown, {}, ICategorySchema, {}, mongoose.DefaultSchemaOptions> & ICategorySchema & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<ICategorySchema, mongoose.Model<ICategorySchema, any, any, any, mongoose.Document<unknown, any, ICategorySchema, any, {}> & ICategorySchema & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ICategorySchema, mongoose.Document<unknown, {}, mongoose.FlatRecord<ICategorySchema>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<ICategorySchema> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default CategoryModel;
//# sourceMappingURL=category.d.ts.map