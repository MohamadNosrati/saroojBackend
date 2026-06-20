import express from "express";
import { getAllMessages } from "../controllers/message.js";
const messagesRouter = express.Router();
messagesRouter.get("/", getAllMessages);
export default messagesRouter;
//# sourceMappingURL=message.js.map