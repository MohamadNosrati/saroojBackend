import type { Socket } from "socket.io";
import type { SocketAcknowledgementCallback } from "../types/base.js";
import type { ISendMessagePayload } from "../types/message.js";
declare class SocketHandlers {
    sendMessage: (socket: Socket) => (message: ISendMessagePayload, cb: SocketAcknowledgementCallback) => Promise<void>;
    messageDelivered: (data: {
        messageId: string;
    }) => Promise<void>;
}
export declare const socketHandlers: SocketHandlers;
export {};
//# sourceMappingURL=eventHandlers.d.ts.map