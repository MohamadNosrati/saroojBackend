import express from "express";
import { createValidator } from "express-joi-validation";
import { createAssistantMessageBodySchema } from "../validators/assistant.js";
import {
  CreateAssitantMessage,
  getSessionAssistantMessages,
} from "../controllers/assistant.js";

const validator = createValidator({
  passError: true,
});

const assistantRouter = express.Router();

assistantRouter.get("/:sessionId", getSessionAssistantMessages);

assistantRouter.post(
  "/",
  validator.body(createAssistantMessageBodySchema),
  CreateAssitantMessage,
);

export default assistantRouter;
