import mongoose from "mongoose";
declare const ConversationModel: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: "private" | "group" | "channel";
    participants: mongoose.Types.ObjectId[];
    adminIds: mongoose.Types.ObjectId[];
    unreadCounts: mongoose.Types.DocumentArray<{
        count: number;
        userId?: mongoose.Types.ObjectId | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        count: number;
        userId?: mongoose.Types.ObjectId | null;
    }> & {
        count: number;
        userId?: mongoose.Types.ObjectId | null;
    }>;
    groupName?: string | null;
    groupAvatar?: string | null;
    lastMessage?: {
        type?: string | null;
        content?: string | null;
        senderId?: mongoose.Types.ObjectId | null;
        timestamp?: NativeDate | null;
    } | null;
}, {}, {}, {}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: "private" | "group" | "channel";
    participants: mongoose.Types.ObjectId[];
    adminIds: mongoose.Types.ObjectId[];
    unreadCounts: mongoose.Types.DocumentArray<{
        count: number;
        userId?: mongoose.Types.ObjectId | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        count: number;
        userId?: mongoose.Types.ObjectId | null;
    }> & {
        count: number;
        userId?: mongoose.Types.ObjectId | null;
    }>;
    groupName?: string | null;
    groupAvatar?: string | null;
    lastMessage?: {
        type?: string | null;
        content?: string | null;
        senderId?: mongoose.Types.ObjectId | null;
        timestamp?: NativeDate | null;
    } | null;
}, {}, {
    timestamps: true;
    versionKey: false;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: "private" | "group" | "channel";
    participants: mongoose.Types.ObjectId[];
    adminIds: mongoose.Types.ObjectId[];
    unreadCounts: mongoose.Types.DocumentArray<{
        count: number;
        userId?: mongoose.Types.ObjectId | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        count: number;
        userId?: mongoose.Types.ObjectId | null;
    }> & {
        count: number;
        userId?: mongoose.Types.ObjectId | null;
    }>;
    groupName?: string | null;
    groupAvatar?: string | null;
    lastMessage?: {
        type?: string | null;
        content?: string | null;
        senderId?: mongoose.Types.ObjectId | null;
        timestamp?: NativeDate | null;
    } | null;
} & {
    _id: mongoose.Types.ObjectId;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
    versionKey: false;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: "private" | "group" | "channel";
    participants: mongoose.Types.ObjectId[];
    adminIds: mongoose.Types.ObjectId[];
    unreadCounts: mongoose.Types.DocumentArray<{
        count: number;
        userId?: mongoose.Types.ObjectId | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        count: number;
        userId?: mongoose.Types.ObjectId | null;
    }> & {
        count: number;
        userId?: mongoose.Types.ObjectId | null;
    }>;
    groupName?: string | null;
    groupAvatar?: string | null;
    lastMessage?: {
        type?: string | null;
        content?: string | null;
        senderId?: mongoose.Types.ObjectId | null;
        timestamp?: NativeDate | null;
    } | null;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: "private" | "group" | "channel";
    participants: mongoose.Types.ObjectId[];
    adminIds: mongoose.Types.ObjectId[];
    unreadCounts: mongoose.Types.DocumentArray<{
        count: number;
        userId?: mongoose.Types.ObjectId | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        count: number;
        userId?: mongoose.Types.ObjectId | null;
    }> & {
        count: number;
        userId?: mongoose.Types.ObjectId | null;
    }>;
    groupName?: string | null;
    groupAvatar?: string | null;
    lastMessage?: {
        type?: string | null;
        content?: string | null;
        senderId?: mongoose.Types.ObjectId | null;
        timestamp?: NativeDate | null;
    } | null;
}>, {}, mongoose.ResolveSchemaOptions<{
    timestamps: true;
    versionKey: false;
}>> & mongoose.FlatRecord<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    type: "private" | "group" | "channel";
    participants: mongoose.Types.ObjectId[];
    adminIds: mongoose.Types.ObjectId[];
    unreadCounts: mongoose.Types.DocumentArray<{
        count: number;
        userId?: mongoose.Types.ObjectId | null;
    }, mongoose.Types.Subdocument<mongoose.mongo.BSON.ObjectId, any, {
        count: number;
        userId?: mongoose.Types.ObjectId | null;
    }> & {
        count: number;
        userId?: mongoose.Types.ObjectId | null;
    }>;
    groupName?: string | null;
    groupAvatar?: string | null;
    lastMessage?: {
        type?: string | null;
        content?: string | null;
        senderId?: mongoose.Types.ObjectId | null;
        timestamp?: NativeDate | null;
    } | null;
}> & {
    _id: mongoose.Types.ObjectId;
}>>;
export default ConversationModel;
//# sourceMappingURL=conversation.d.ts.map