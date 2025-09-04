import express from "express";
import authentication from "../middlewares/authenction.js";
import authorization from "../middlewares/authorization.js";
import { deletePicture, uploadPicture } from "../controllers/picture.js";
import Multer from "../middlewares/upload.js";

const pictureRouter = express.Router();

pictureRouter.post("/upload",authentication,authorization(["admin"]),Multer.array("images",2),uploadPicture);
pictureRouter.delete("/delete",authentication,authorization(["admin"]),deletePicture);

export default pictureRouter;