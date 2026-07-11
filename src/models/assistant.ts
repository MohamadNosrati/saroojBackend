import mongoose from "mongoose";
import idPlugin from "../tools/idPlugin.js";
import type { IAssistantMessageSchema } from "../types/assistant.js";

const assistantMessageSchema = new mongoose.Schema<IAssistantMessageSchema>(
  {
    text: {
      type: String,
      required: [true, "text field is required"],
    },
    sessionId: {
      type: String,
      required: [true, "sessionId field is required"],
    },
    role: {
      type: String,
      enum: ["assistant", "user"],
      required: [true, "type field is required"],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

assistantMessageSchema.plugin(idPlugin);

const AssistantModel = mongoose.model("Assistant", assistantMessageSchema);

export default AssistantModel;
