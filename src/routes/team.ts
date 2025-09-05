import express from "express";
import authentication from "../middlewares/authenction.js";
import authorization from "../middlewares/authorization.js";
import { createValidator } from "express-joi-validation";
import {
  createTeamateBodySchema,
  updateTeamateBodySchema,
} from "../validators/teamate.js";
import {
  createTeamate,
  deleteTeamate,
  findTeamate,
  getAllTeamates,
  updateTeamate,
} from "../controllers/team.js";

const validator = createValidator({
  passError: true,
});

const teamRouter = express.Router();

teamRouter.get("/", getAllTeamates);
teamRouter.get("/:id", authentication, authorization(["admin"]), findTeamate);
teamRouter.post(
  "/",
  authentication,
  authorization(["admin"]),
  validator.body(createTeamateBodySchema),
  createTeamate
);
teamRouter.delete(
  "/:id",
  authentication,
  authorization(["admin"]),
  deleteTeamate
);
teamRouter.patch(
  "/:id",
  authentication,
  authorization(["admin"]),
  validator.body(updateTeamateBodySchema),
  updateTeamate
);

export default teamRouter;
