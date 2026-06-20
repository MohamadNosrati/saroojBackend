import { Socket } from "socket.io";
declare class SocketManager {
    private onlineUsers;
    registerUser(socket: Socket, userId: string): Promise<void>;
    unregisterUser(socket: Socket): void;
    getUserSockets(userId: string): Socket[];
    addUserToRoom(userId: string, roomName: string): void;
}
export declare const socketManager: SocketManager;
export {};
//# sourceMappingURL=manager.d.ts.map