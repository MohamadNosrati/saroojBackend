import express from "express";
import { createProject, deleteProject, findProject, getAllProjects, updateProject } from "../controllers/project.js";

const projectRouter = express.Router();

projectRouter.get("/",getAllProjects);
projectRouter.get("/:id",findProject);
projectRouter.post("/",createProject);
projectRouter.get("/:id",deleteProject);
projectRouter.get("/:id",updateProject);


export default projectRouter;