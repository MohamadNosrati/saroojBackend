import express from "express";
import { createComment, deleteComment, findComment, getAllComments, updateComment } from "../controllers/comment.js";
import { createValidator } from "express-joi-validation";
import { commentBodySchema } from "../validators/comment.js";

const validator = createValidator({
    passError:true
});

const commentRouter = express.Router();

commentRouter.get("/",getAllComments);
commentRouter.get("/:id",findComment);
commentRouter.post("/",validator.body(commentBodySchema),createComment);
commentRouter.delete("/:id",deleteComment);
commentRouter.get("/:id",updateComment);


export default commentRouter;