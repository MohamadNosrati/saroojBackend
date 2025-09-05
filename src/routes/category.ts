import express from "express";
import {
  createCategory,
  deleteCategory,
  findCategory,
  getAllCategorys,
  updateCategory,
} from "../controllers/category.js";
import authentication from "../middlewares/authenction.js";
import authorization from "../middlewares/authorization.js";
import { createValidator } from "express-joi-validation";
import {
  createCategroyBodySchema,
  updateCategroyBodySchema,
} from "../validators/category.js";

const validator = createValidator({
  passError: true,
});

const categoryRouter = express.Router();

categoryRouter.get("/", getAllCategorys);
categoryRouter.get(
  "/:id",
  authentication,
  authorization(["admin"]),
  findCategory
);
categoryRouter.post(
  "/",
  authentication,
  authorization(["admin"]),
  validator.body(createCategroyBodySchema),
  createCategory
);
categoryRouter.delete(
  "/:id",
  authentication,
  authorization(["admin"]),
  deleteCategory
);
categoryRouter.patch(
  "/:id",
  authentication,
  authorization(["admin"]),
  validator.body(updateCategroyBodySchema),
  updateCategory
);

export default categoryRouter;
