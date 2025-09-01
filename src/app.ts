import express, { type NextFunction, type Request, type Response } from "express";
import projectRouter from "./routes/project.js";
import commentRouter from "./routes/comment.js";
import CategoryRouter from "./routes/category.js";
import teamRouter from "./routes/team.js";
import globalErrorHandler from "./tools/globalErrorHandler.js";
import notFoundErrorHandler from "./tools/notFoundHandler.js";

const app = express();

app.use(express.json());



/// app routes

app.use("/projects",projectRouter);
app.use("/comments",commentRouter);
app.use("/categories",CategoryRouter);
app.use("/teamates",teamRouter);




app.use(notFoundErrorHandler);
app.use(globalErrorHandler);

export default app;