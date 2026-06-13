import type { Socket } from "socket.io";
import ConversationModel from "../models/conversation.js";
import type { SocketAcknowledgementCallback } from "../types/base.js";
import type { ISendMessagePayload } from "../types/message.js";
import { socketManager } from "./manager.js";
import MessageModel from "../models/message.js";
import { eventNames } from "../config/socket.js";

class SocketHandlers {
  sendMessage =
    (socket: Socket) =>
      async (message: ISendMessagePayload, cb: SocketAcknowledgementCallback) => {
        try {
          const { senderId, content, conversationId, attachments, otherUserId } =
            message;

          let finalConversationId = conversationId;
          let conversation = undefined;
          if (!conversationId) {
            conversation = await ConversationModel.create({
              participants: [senderId, otherUserId],
              type: "private",
            });
            finalConversationId = conversation._id.toString();
          }
          const roomName = `room-${finalConversationId}`;
          socket.join(roomName);

          socketManager.addUserToRoom(
            otherUserId?.toString() as string,
            roomName,
          );

          const messageDoc = await MessageModel.create({
            conversationId: finalConversationId,
            senderId,
            content,
            attachments,
            status: "sent",
          });
          socket.broadcast.to(roomName).emit(eventNames.receiveMessage, messageDoc);
          cb({
            success: true,
            message: "message sent succuesfully!",
            data: {
              message: messageDoc,
              conversation: conversation
            },
          });
        } catch (err) {
          cb({
            success: false,
            message: "there is a problem",
          });
        }
      };

  messageDelivered = async (data: {
    messageId: string
  }) => {
    await MessageModel.findByIdAndUpdate(
      data?.messageId,
      { $set: { status: "delivered" } }
    );
  }
}

export const socketHandlers = new SocketHandlers();
