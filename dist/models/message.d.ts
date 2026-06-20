import mongoose from "mongoose";
import type { IMessage } from "../types/message.js";
export declare const MessageModel: mongoose.Model<IMessage, {}, {}, {}, mongoose.Document<unknown, {}, IMessage, {}, mongoose.DefaultSchemaOptions> & IMessage & Required<{
    _id: string | mongoose.Types.ObjectId;
}> & {
    __v: number;
}, mongoose.Schema<IMessage, mongoose.Model<IMessage, any, any, any, mongoose.Document<unknown, any, IMessage, any, {}> & IMessage & Required<{
    _id: string | mongoose.Types.ObjectId;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, IMessage, mongoose.Document<unknown, {}, mongoose.FlatRecord<IMessage>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<IMessage> & Required<{
    _id: string | mongoose.Types.ObjectId;
}> & {
    __v: number;
}>>;
export default MessageModel;
//# sourceMappingURL=message.d.ts.map