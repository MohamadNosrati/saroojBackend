import catchAsync from "../tools/catchAsync.js";
import UserModel from "../models/user.js";
import CustomError from "../tools/CustomError.js";
import bcrypt from "bcrypt";
import tokenGenerator from "../tools/tokenGenerator.js";
export const signup = catchAsync(async (req, res, next) => {
    const prvUser = await UserModel.findOne({
        $or: [{ email: req.body.email }, { userName: req.body.userName }],
    });
    if (prvUser) {
        return next(new CustomError(400, "there is allReady a user with this email or userName"));
    }
    const { email, userName, password } = req.body;
    const user = await UserModel.create({
        email: email,
        userName: userName,
        password: password,
    });
    const token = tokenGenerator(user?.id);
    res.status(201).json({
        status: 201,
        message: `user signed up successfully!`,
        data: user,
        token: token,
    });
});
export const signin = catchAsync(async (req, res, next) => {
    const user = await UserModel.findOne({ email: req.body.email }).populate("pictureId", ["image", "id"]);
    if (!user) {
        return next(new CustomError(400, "no user with this email or password!"));
    }
    const passwordCorrect = await bcrypt.compare(req.body.password, user?.password);
    if (!passwordCorrect) {
        return next(new CustomError(400, "no user with this email or password!"));
    }
    const token = tokenGenerator(user?.id);
    res.status(200).json({
        status: 200,
        message: `user singd in successfully!`,
        data: {
            user: user,
            token: token,
        },
    });
});
export const getMe = catchAsync(async (req, res, next) => {
    const user = await UserModel.findOne({ email: req.body.email }).populate("pictureId", ["image", "id"]);
    if (!user) {
        return next(new CustomError(400, "no user with this email or password!"));
    }
    const passwordCorrect = await bcrypt.compare(req.body.password, user?.password);
    if (!passwordCorrect) {
        return next(new CustomError(400, "no user with this email or password!"));
    }
    const token = tokenGenerator(user?.id);
    res.status(200).json({
        status: 200,
        message: `user singd in successfully!`,
        data: {
            user: user,
            token: token,
        },
    });
});
//# sourceMappingURL=auth.js.map