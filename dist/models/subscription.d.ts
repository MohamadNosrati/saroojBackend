import mongoose from "mongoose";
import type { ISubscription } from "../types/subscription.js";
declare const SubscriptionModel: mongoose.Model<ISubscription, {}, {}, {}, mongoose.Document<unknown, {}, ISubscription, {}, mongoose.DefaultSchemaOptions> & ISubscription & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, mongoose.Schema<ISubscription, mongoose.Model<ISubscription, any, any, any, mongoose.Document<unknown, any, ISubscription, any, {}> & ISubscription & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ISubscription, mongoose.Document<unknown, {}, mongoose.FlatRecord<ISubscription>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<ISubscription> & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>>;
export default SubscriptionModel;
//# sourceMappingURL=subscription.d.ts.map