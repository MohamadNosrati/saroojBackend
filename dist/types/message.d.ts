import { Types } from "mongoose";
import type { IConversation } from "./conversation.js";
export declare enum MessageType {
    TEXT = "text",
    IMAGE = "image",
    VIDEO = "video",
    FILE = "file",
    AUDIO = "audio",
    LOCATION = "location",
    SYSTEM = "system",
    DELETED = "deleted"
}
export declare enum MessageStatus {
    SENT = "sent",
    DELIVERED = "delivered",
    READ = "read",
    FAILED = "failed"
}
export interface IAttachment {
    url: string;
    type: string;
    name: string;
    size: number;
    mimeType: string;
    thumbnail?: string;
}
export interface IReaction {
    userId: Types.ObjectId | string;
    reaction: string;
    timestamp: Date;
}
export interface IMessageStatus {
    status: MessageStatus;
    readAt?: Date;
    deliveredAt?: Date;
}
export interface IReplyTo {
    messageId: Types.ObjectId | string;
    content: string;
    senderId?: Types.ObjectId | string;
}
export interface IEditHistory {
    content: string;
    editedAt: Date;
}
export interface IMessageMetadata {
    ip?: string;
    userAgent?: string;
    platform?: string;
}
export interface ILastMessage {
    content: string;
    senderId: Types.ObjectId | string;
    timestamp: Date;
    type: MessageType;
}
export interface IUnreadCount {
    userId: Types.ObjectId | string;
    count: number;
}
export interface IMessage {
    _id?: Types.ObjectId | string;
    conversationId: Types.ObjectId | string;
    senderId: Types.ObjectId | string;
    senderName?: string;
    senderAvatar?: string;
    content: string;
    type: MessageType;
    attachments?: IAttachment[];
    status: IMessageStatus;
    reactions?: IReaction[];
    replyTo?: IReplyTo;
    edited: boolean;
    editedAt?: Date;
    editHistory?: IEditHistory[];
    deleted: boolean;
    deletedFor?: (Types.ObjectId | string)[];
    deletedAt?: Date;
    metadata?: IMessageMetadata;
    createdAt: Date;
    updatedAt: Date;
}
export interface ISendMessagePayload {
    conversationId: string;
    content: string;
    type?: MessageType;
    replyToId?: string;
    attachments?: IAttachment[];
    otherUserId?: Types.ObjectId;
    senderId: Types.ObjectId;
}
export interface IReceiveMessagePayload {
    message: IMessage;
    conversation: IConversation;
}
export interface IJoinConversationPayload {
    conversationId: string;
}
export interface ICreatePrivateChatPayload {
    otherUserId: Types.ObjectId;
}
export interface ICreateGroupPayload {
    groupName: string;
    participantIds: string[];
    groupAvatar?: string;
    groupDescription?: string;
}
export interface IAddGroupMemberPayload {
    conversationId: string;
    userId: string;
}
export interface IRemoveGroupMemberPayload {
    conversationId: string;
    userId: string;
}
export interface IMarkAsReadPayload {
    conversationId: string;
    messageId: string;
}
export interface ITypingPayload {
    conversationId: string;
    isTyping: boolean;
}
export interface IMessageReactionPayload {
    messageId: string;
    reaction: string;
}
export interface IMessageResponse {
    message?: IMessage;
    messages?: IMessage[];
    error?: string;
    total?: number;
    page?: number;
    limit?: number;
}
export interface IMessageQueryOptions {
    conversationId?: string;
    senderId?: string;
    startDate?: Date;
    endDate?: Date;
    limit?: number;
    offset?: number;
    sortBy?: "createdAt" | "updatedAt";
    sortOrder?: "asc" | "desc";
}
//# sourceMappingURL=message.d.ts.map