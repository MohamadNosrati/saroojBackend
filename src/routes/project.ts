import express from "express";
import {
  createProject,
  deleteProject,
  findProject,
  findProjectBySlug,
  getAllInfo,
  getAllProjects,
  getAllSlugs,
  updateProject,
} from "../controllers/project.js";
import authentication from "../middlewares/authenction.js";
import authorization from "../middlewares/authorization.js";
import { createValidator } from "express-joi-validation";
import {
  createProjectBodySchema,
  updateProjectBodySchema,
} from "../validators/project.js";

const validator = createValidator({
  passError: true,
});

const projectRouter = express.Router();

projectRouter.get("/", getAllProjects);
projectRouter.get("/get-all-slugs", getAllSlugs);
projectRouter.get("/get-all-info", getAllInfo);
projectRouter.get("/:id", findProject);
projectRouter.get("/find-by-slug/:slug", findProjectBySlug);
projectRouter.post(
  "/",
  authentication,
  authorization(["admin"]),
  validator.body(createProjectBodySchema),
  createProject,
);
projectRouter.delete(
  "/:id",
  authentication,
  authorization(["admin"]),
  deleteProject,
);
projectRouter.patch(
  "/:id",
  authentication,
  authorization(["admin"]),
  validator.body(updateProjectBodySchema),
  updateProject,
);

export default projectRouter;
