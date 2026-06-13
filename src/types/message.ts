// types/message.types.ts

import { Types } from "mongoose";
import type { IConversation } from "./conversation.js";

export enum MessageType {
  TEXT = "text",
  IMAGE = "image",
  VIDEO = "video",
  FILE = "file",
  AUDIO = "audio",
  LOCATION = "location",
  SYSTEM = "system",
  DELETED = "deleted",
}

export enum MessageStatus {
  SENT = "sent",
  DELIVERED = "delivered",
  READ = "read",
  FAILED = "failed",
}

// ============ SUB-INTERFACES ============
export interface IAttachment {
  url: string;
  type: string;
  name: string;
  size: number;
  mimeType: string;
  thumbnail?: string; // Optional thumbnail URL
}

export interface IReaction {
  userId: Types.ObjectId | string;
  reaction: string; // Emoji or reaction type
  timestamp: Date;
}

export interface IMessageStatus {
  status:MessageStatus;
  readAt?: Date;
  deliveredAt?: Date;
}

export interface IReplyTo {
  messageId: Types.ObjectId | string;
  content: string;
  senderId?: Types.ObjectId | string; // Optional: who wrote the original
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

// ============ MAIN INTERFACES ============

// Message Interface
export interface IMessage {
  _id?: Types.ObjectId | string;

  // Identifiers
  // roomId: string;
  conversationId: Types.ObjectId | string;

  // Sender info
  senderId: Types.ObjectId | string;
  senderName?: string; // Denormalized
  senderAvatar?: string; // Denormalized

  // Content
  content: string;
  type: MessageType;

  // Attachments
  attachments?: IAttachment[];

  // Status
  status: IMessageStatus;

  // Reactions
  reactions?: IReaction[];

  // Reply feature
  replyTo?: IReplyTo;

  // Edit feature
  edited: boolean;
  editedAt?: Date;
  editHistory?: IEditHistory[];

  // Delete feature
  deleted: boolean;
  deletedFor?: (Types.ObjectId | string)[]; // Users who deleted this message
  deletedAt?: Date;

  // Metadata
  metadata?: IMessageMetadata;

  // Timestamps
  createdAt: Date;
  updatedAt: Date;
}

// Conversation Interface

// ============ SOCKET EVENT PAYLOADS ============

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
