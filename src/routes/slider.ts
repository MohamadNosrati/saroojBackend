import express from "express";
import authentication from "../middlewares/authenction.js";
import authorization from "../middlewares/authorization.js";
import { createValidator } from "express-joi-validation";
import { createSlider, deleteSlider, findSlider, getAllSliders, updateSlider } from "../controllers/slider.js";
import { createSliderBodySchema, updateSliderBodySchema } from "../validators/slider.js";

const validator = createValidator({
    passError: true,
});

const categoryRouter = express.Router();

categoryRouter.get("/", getAllSliders);
categoryRouter.get(
    "/:id",
    authentication,
    authorization(["admin"]),
    findSlider
);
categoryRouter.post(
    "/",
    authentication,
    authorization(["admin"]),
    validator.body(createSliderBodySchema),
    createSlider
);
categoryRouter.delete(
    "/:id",
    authentication,
    authorization(["admin"]),
    deleteSlider
);
categoryRouter.patch(
    "/:id",
    authentication,
    authorization(["admin"]),
    validator.body(updateSliderBodySchema),
    updateSlider
);

export default categoryRouter;
