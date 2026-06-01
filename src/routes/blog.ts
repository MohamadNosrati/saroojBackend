import express from "express";
import authentication from "../middlewares/authenction.js";
import authorization from "../middlewares/authorization.js";
import { createValidator } from "express-joi-validation";
import {
  createBlog,
  deleteBlog,
  findBlog,
  findBlogBySlug,
  getAllBlogs,
  updateBlog,
} from "../controllers/blog.js";
import { createBlogBodySchema, updateBlogBodySchema } from "../validators/blog.js";

const validator = createValidator({
  passError: true,
});

const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.get("/:id", authentication, authorization(["admin"]), findBlog);
blogRouter.get("/find-by-slug/:slug", findBlogBySlug);
blogRouter.post(
  "/",
  authentication,
  authorization(["admin"]),
  validator.body(createBlogBodySchema),
  createBlog,
);
blogRouter.delete(
  "/:id",
  authentication,
  authorization(["admin"]),
  deleteBlog,
);
blogRouter.patch(
  "/:id",
  authentication,
  authorization(["admin"]),
  validator.body(updateBlogBodySchema),
  updateBlog,
);

export default blogRouter;
