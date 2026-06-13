import express from "express";
import { getUserConversations } from "../controllers/conversation.js";

const conversationRouter = express.Router();

conversationRouter.get("/", getUserConversations);

export default conversationRouter;