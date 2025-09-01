import express from "express";
import { createCategory, deleteCategory, findCategory, getAllCategorys, updateCategory } from "../controllers/category.js";

const CategoryRouter = express.Router();

CategoryRouter.get("/",getAllCategorys);
CategoryRouter.get("/:id",findCategory);
CategoryRouter.post("/",createCategory);
CategoryRouter.get("/:id",deleteCategory);
CategoryRouter.get("/:id",updateCategory);


export default CategoryRouter;