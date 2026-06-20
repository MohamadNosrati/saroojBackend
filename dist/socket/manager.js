import { Socket } from "socket.io";
import { io } from "../server.js";
import ConversationModel from "../models/conversation.js";
import MessageModel from "../models/message.js";
class SocketManager {
    onlineUsers = new Map();
    async registerUser(socket, userId) {
        socket.userId = userId;
        if (!this.onlineUsers.has(userId)) {
            this.onlineUsers.set(userId, new Set());
        }
        this.onlineUsers.get(userId).add(socket.id);
        console.log(`User ${userId} online with socket ${socket.id}`);
        const conversations = await ConversationModel.find({
            participants: userId,
        }).select("_id");
        conversations.forEach((conversation) => {
            const roomName = `room-${conversation?.id.toString()}`;
            socket.join(roomName);
            console.log(`Rejoined user ${userId} socket ${socket.id} to ${roomName}`);
        });
    }
    unregisterUser(socket) {
        if (socket.userId && this.onlineUsers.has(socket.userId)) {
            this.onlineUsers.get(socket.userId)?.delete(socket.id);
            if (this.onlineUsers.get(socket.userId).size === 0) {
                this.onlineUsers.delete(socket.userId);
            }
        }
    }
    getUserSockets(userId) {
        const socketIds = this.onlineUsers.get(userId);
        if (!socketIds)
            return [];
        const sockets = [];
        for (const socketId of socketIds) {
            const socket = io.sockets.sockets.get(socketId);
            if (socket)
                sockets.push(socket);
        }
        return sockets;
    }
    addUserToRoom(userId, roomName) {
        const sockets = this.getUserSockets(userId);
        sockets.forEach((socket) => {
            socket.join(roomName);
            console.log(`Added user ${userId} (socket ${socket.id}) to room ${roomName}`);
        });
    }
}
export const socketManager = new SocketManager();
//# sourceMappingURL=manager.js.map