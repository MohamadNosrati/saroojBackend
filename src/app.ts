import express from "express";
import projectRouter from "./routes/project.js";
import commentRouter from "./routes/comment.js";
import CategoryRouter from "./routes/category.js";
import teamRouter from "./routes/team.js";

const app = express();

app.use(express.json());



/// app routes

app.use("/projects",projectRouter);
app.use("/comments",commentRouter);
app.use("/categories",CategoryRouter);
app.use("/teamates",teamRouter);


export default app;