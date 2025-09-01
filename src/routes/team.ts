import express from "express";
import { createTeam, deleteTeam, findTeam, getAllTeams, updateTeam } from "../controllers/team.js";

const teamRouter = express.Router();

teamRouter.get("/",getAllTeams);
teamRouter.get("/:id",findTeam);
teamRouter.post("/",createTeam);
teamRouter.get("/:id",deleteTeam);
teamRouter.get("/:id",updateTeam);


export default teamRouter;