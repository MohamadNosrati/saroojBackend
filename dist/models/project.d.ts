import mongoose from "mongoose";
import type { IProjectSchema } from "../types/project.js";
declare const ProjectModel: mongoose.Model<IProjectSchema, {}, {}, {}, mongoose.Document<unknown, {}, IProjectSchema, {}, mongoose.DefaultSchemaOptions> & IProjectSchema & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<IProjectSchema, mongoose.Model<IProjectSchema, any, any, any, mongoose.Document<unknown, any, IProjectSchema, any, {}> & IProjectSchema & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, IProjectSchema, mongoose.Document<unknown, {}, mongoose.FlatRecord<IProjectSchema>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<IProjectSchema> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default ProjectModel;
//# sourceMappingURL=project.d.ts.map