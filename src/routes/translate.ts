import express from "express";
import authentication from "../middlewares/authenction.js";
import authorization from "../middlewares/authorization.js";
import { createValidator } from "express-joi-validation";
import translateSchema from "../validators/translate.js";
import { translate } from "../controllers/translate.js";

const validator = createValidator({
  passError: true,
});

const translateRouter = express.Router();

translateRouter.post(
  "/",
  authentication,
  authorization(["admin"]),
  validator.body(translateSchema),
  translate,
);

export default translateRouter;
