import express from "express";
import { createValidator } from "express-joi-validation";
import { userSigninBody, userSignupBody } from "../validators/user.js";
import { signin, signup } from "../controllers/auth.js";


const validator = createValidator({
    passError:true
})

const AuthRoutes = express.Router();

AuthRoutes.post("/signup",signup);
AuthRoutes.post("/signin",validator.body(userSigninBody),signin);

export default AuthRoutes;