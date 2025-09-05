import express from "express";
import projectRouter from "./routes/project.js";
import commentRouter from "./routes/comment.js";
import categoryRouter from "./routes/category.js";
import teamRouter from "./routes/team.js";
import globalErrorHandler from "./middlewares/globalErrorHandler.js";
import notFoundErrorHandler from "./tools/notFoundHandler.js";
import AuthRoutes from "./routes/auth.js";
import dotenv from "dotenv";
import morgan from "morgan";
import pictureRouter from "./routes/picture.js";

dotenv.config()
const app = express();
app.use(express.json());
app.use(morgan("dev"));



/// app routes

app.use("/auth",AuthRoutes);
app.use("/projects",projectRouter);
app.use("/comments",commentRouter);
app.use("/categories",categoryRouter);
app.use("/teamates",teamRouter);
app.use("/pictures",pictureRouter);




app.use(notFoundErrorHandler);
app.use(globalErrorHandler);

export default app;