import express from "express";
import authentication from "../middlewares/authenction.js";
import authorization from "../middlewares/authorization.js";
import { createValidator } from "express-joi-validation";
import { getAllNotifications, sendNotificationToSubscriptions } from "../controllers/notification.js";
import { createNotificationBodySchema } from "../validators/notification.js";



const validator = createValidator({
  passError: true,
});

const notificationRouter = express.Router();

notificationRouter.get(
  "/",
  authentication,
  authorization(["admin"]),
  getAllNotifications,
);

notificationRouter.post(
  "/",
  authentication,
  authorization(["admin"]),
  validator.body(createNotificationBodySchema),
  sendNotificationToSubscriptions,
);


export default notificationRouter;
