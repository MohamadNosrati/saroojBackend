import express from "express";
import { createValidator } from "express-joi-validation";
import { userSigninBody, userSignupBody } from "../validators/user.js";
import { getMe, signin, signup } from "../controllers/auth.js";
import authentication from "../middlewares/authenction.js";
import authorization from "../middlewares/authorization.js";
const validator = createValidator({
    passError: true
});
const AuthRoutes = express.Router();
AuthRoutes.post("/signup", validator.body(userSignupBody), signup);
AuthRoutes.post("/signin", validator.body(userSigninBody), signin);
AuthRoutes.get("/get-me", authentication, authorization(["admin"]), getMe);
export default AuthRoutes;
//# sourceMappingURL=auth.js.map