import mongoose from "mongoose";
import type { INotificationSchema } from "../types/notifcation.js";
declare const NotificationModel: mongoose.Model<INotificationSchema, {}, {}, {}, mongoose.Document<unknown, {}, INotificationSchema, {}, mongoose.DefaultSchemaOptions> & INotificationSchema & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<INotificationSchema, mongoose.Model<INotificationSchema, any, any, any, mongoose.Document<unknown, any, INotificationSchema, any, {}> & INotificationSchema & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, INotificationSchema, mongoose.Document<unknown, {}, mongoose.FlatRecord<INotificationSchema>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<INotificationSchema> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default NotificationModel;
//# sourceMappingURL=notification.d.ts.map