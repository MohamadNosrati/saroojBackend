import express from "express";
import {
  createTeam,
  deleteTeam,
  findTeam,
  getAllTeams,
  updateTeam,
} from "../controllers/team.js";
import authentication from "../middlewares/authenction.js";
import authorization from "../middlewares/authorization.js";
import { createValidator } from "express-joi-validation";
import {
  createTeamateBodySchema,
  updateTeamateBodySchema,
} from "../validators/teamate.js";

const validator = createValidator({
  passError: true,
});

const teamRouter = express.Router();

teamRouter.get("/", getAllTeams);
teamRouter.get("/:id", authentication, authorization(["admin"]), findTeam);
teamRouter.post(
  "/",
  authentication,
  authorization(["admin"]),
  validator.body(createTeamateBodySchema),
  createTeam
);
teamRouter.delete("/:id", authentication, authorization(["admin"]), deleteTeam);
teamRouter.patch(
  "/:id",
  authentication,
  authorization(["admin"]),
  validator.body(updateTeamateBodySchema),
  updateTeam
);

export default teamRouter;
