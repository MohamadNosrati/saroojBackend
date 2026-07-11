export interface IAssistantMessageSchema {
  text:string;
  email:string;
  createdAt:Date;
  updatedAt:Date;
  sessionId:string;
  role:"assistant" | "user";
}