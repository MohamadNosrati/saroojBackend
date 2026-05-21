import mongoose from "mongoose";
import type { ITeamate } from "../types/team.js";
declare const TeamModel: mongoose.Model<ITeamate, {}, {}, {}, mongoose.Document<unknown, {}, ITeamate, {}, mongoose.DefaultSchemaOptions> & ITeamate & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<ITeamate, mongoose.Model<ITeamate, any, any, any, mongoose.Document<unknown, any, ITeamate, any, {}> & ITeamate & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ITeamate, mongoose.Document<unknown, {}, mongoose.FlatRecord<ITeamate>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<ITeamate> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default TeamModel;
//# sourceMappingURL=team.d.ts.map