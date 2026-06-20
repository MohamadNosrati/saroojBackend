import express from "express";
import { createValidator } from "express-joi-validation";
import authentication from "../middlewares/authenction.js";
import authorization from "../middlewares/authorization.js";
import { updateUserBody } from "../validators/user.js";
import { getAllUsers, updateUser } from "../controllers/user.js";
const validator = createValidator({
    passError: true,
});
const userRouter = express.Router();
userRouter.get("/", authentication, authorization(["admin"]), getAllUsers);
userRouter.patch("/:id", authentication, authorization(["admin"]), validator.body(updateUserBody), updateUser);
export default userRouter;
//# sourceMappingURL=user.js.map