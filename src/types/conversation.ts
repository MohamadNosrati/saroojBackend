import { Types } from "mongoose";
import type { ILastMessage, IUnreadCount } from "./message.js";


export enum ConversationType {
  PRIVATE = "private",
  GROUP = "group",
  CHANNEL = "channel"
}

export interface IConversation {
  _id?: Types.ObjectId | string;

  // Basic info
  type: ConversationType;
  otherUserId?: Types.ObjectId,
  participants: (Types.ObjectId | string)[];

  // Group specific
  groupName?: string;
  groupAvatar?: string;
  groupDescription?: string;
  adminIds?: (Types.ObjectId | string)[];

  // Channel specific (if needed)
  channelName?: string;
  isPublic?: boolean;

  // Last message (denormalized for quick display)
  lastMessage?: ILastMessage;

  // Unread counts per user
  unreadCounts?: IUnreadCount[];

  // Settings
  settings?: {
    muteNotifications?: boolean;
    pinMessage?: Types.ObjectId | string;
    theme?: string;
  };

  // Timestamps
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