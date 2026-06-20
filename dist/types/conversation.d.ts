import { Types } from "mongoose";
import type { ILastMessage, IUnreadCount } from "./message.js";
export declare enum ConversationType {
    PRIVATE = "private",
    GROUP = "group",
    CHANNEL = "channel"
}
export interface IConversation {
    _id?: Types.ObjectId | string;
    type: ConversationType;
    otherUserId?: Types.ObjectId;
    participants: (Types.ObjectId | string)[];
    groupName?: string;
    groupAvatar?: string;
    groupDescription?: string;
    adminIds?: (Types.ObjectId | string)[];
    channelName?: string;
    isPublic?: boolean;
    lastMessage?: ILastMessage;
    unreadCounts?: IUnreadCount[];
    settings?: {
        muteNotifications?: boolean;
        pinMessage?: Types.ObjectId | string;
        theme?: string;
    };
    createdAt: Date;
    updatedAt: Date;
}
export interface IConversationResponse {
    success: boolean;
    conversation?: IConversation;
    conversations?: IConversation[];
    error?: string;
}
export interface IConversationQueryOptions {
    participantId?: string;
    type?: ConversationType;
    limit?: number;
    offset?: number;
}
//# sourceMappingURL=conversation.d.ts.map