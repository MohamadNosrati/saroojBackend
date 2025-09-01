import express from "express";
import { createComment, deleteComment, findComment, getAllComments, updateComment } from "../controllers/comment.js";

const commentRouter = express.Router();

commentRouter.get("/",getAllComments);
commentRouter.get("/:id",findComment);
commentRouter.post("/",createComment);
commentRouter.get("/:id",deleteComment);
commentRouter.get("/:id",updateComment);


export default commentRouter;