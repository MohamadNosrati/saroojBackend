// types/message.types.ts
import { Types } from "mongoose";
export var MessageType;
(function (MessageType) {
    MessageType["TEXT"] = "text";
    MessageType["IMAGE"] = "image";
    MessageType["VIDEO"] = "video";
    MessageType["FILE"] = "file";
    MessageType["AUDIO"] = "audio";
    MessageType["LOCATION"] = "location";
    MessageType["SYSTEM"] = "system";
    MessageType["DELETED"] = "deleted";
})(MessageType || (MessageType = {}));
export var MessageStatus;
(function (MessageStatus) {
    MessageStatus["SENT"] = "sent";
    MessageStatus["DELIVERED"] = "delivered";
    MessageStatus["READ"] = "read";
    MessageStatus["FAILED"] = "failed";
})(MessageStatus || (MessageStatus = {}));
//# sourceMappingURL=message.js.map