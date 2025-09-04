import express from "express";
import {
  createComment,
  deleteComment,
  findComment,
  getAllComments,
  updateComment,
} from "../controllers/comment.js";
import { createValidator } from "express-joi-validation";
import { commentBodySchema } from "../validators/comment.js";
import authentication from "../middlewares/authenction.js";
import authorization from "../middlewares/authorization.js";

const validator = createValidator({
  passError: true,
});

const commentRouter = express.Router();

commentRouter.get("/", getAllComments);
commentRouter.get(
  "/:id",
  authentication,
  authorization(["admin"]),
  findComment
);
commentRouter.post("/", validator.body(commentBodySchema), createComment);
commentRouter.delete(
  "/:id",
  authentication,
  authorization(["admin"]),
  deleteComment
);
commentRouter.patch(
  "/:id",
  authentication,
  authorization(["admin"]),
  updateComment
);

export default commentRouter;
