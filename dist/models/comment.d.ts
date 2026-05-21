import mongoose from "mongoose";
import type { ICommentSchema } from "../types/comment.js";
declare const CommentModel: mongoose.Model<ICommentSchema, {}, {}, {}, mongoose.Document<unknown, {}, ICommentSchema, {}, mongoose.DefaultSchemaOptions> & ICommentSchema & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<ICommentSchema, mongoose.Model<ICommentSchema, any, any, any, mongoose.Document<unknown, any, ICommentSchema, any, {}> & ICommentSchema & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ICommentSchema, mongoose.Document<unknown, {}, mongoose.FlatRecord<ICommentSchema>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<ICommentSchema> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default CommentModel;
//# sourceMappingURL=comment.d.ts.map