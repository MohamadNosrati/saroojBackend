import express from "express";
import authentication from "../middlewares/authenction.js";
import authorization from "../middlewares/authorization.js";
import { createValidator } from "express-joi-validation";
import {
  createSliderBodySchema,
  updateSliderBodySchema,
} from "../validators/slider.js";
import {
  createSubscription,
  getAllSubscriptions,
} from "../controllers/subscription.js";

const validator = createValidator({
  passError: true,
});

const subscriptionRouter = express.Router();

subscriptionRouter.get(
  "/",
  authentication,
  authorization(["admin"]),
  getAllSubscriptions,
);
// sliderRouter.get(
//     "/:id",
//     authentication,
//     authorization(["admin"]),
//     findSlider
// );
subscriptionRouter.post(
  "/",
  // authentication,
  // authorization(["admin"]),
  // validator.body(createSliderBodySchema),
  createSubscription,
);
// sliderRouter.delete(
//     "/:id",
//     authentication,
//     authorization(["admin"]),
//     deleteSlider
// );
// sliderRouter.patch(
//     "/:id",
//     authentication,
//     authorization(["admin"]),
//     validator.body(updateSliderBodySchema),
//     updateSlider
// );

export default subscriptionRouter;
