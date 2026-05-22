import CommentModel from "../models/comment.js";
import catchAsync from "../tools/catchAsync.js";
import checkExists from "../tools/checkExsits.js";
export const createComment = catchAsync(async (req, res) => {
    const comment = await CommentModel.create(req.body);
    res.status(201).json({
        status: 201,
        message: "نظر با موفقیت صاخته شد.",
        data: comment,
    });
});
export const getAllComments = catchAsync(async (req, res) => {
    const comments = await CommentModel.find();
    res.status(200).json({
        status: 200,
        message: "لیست نظرات با موفقیت دریافت شد.",
        data: comments,
    });
});
export const findComment = catchAsync(async (req, res, next) => {
    const comment = await checkExists(CommentModel, next, "دسته بندی", req.params?.id);
    res.status(201).json({
        status: 201,
        message: "پروژه با موفقیت دریافت شد",
        data: comment,
    });
});
export const deleteComment = catchAsync(async (req, res, next) => {
    await checkExists(CommentModel, next, "نظر", req.params.id);
    await CommentModel.findByIdAndDelete(req.params.id);
    res.status(201).json({
        status: 201,
        message: "نظر با موفقیت پاک شد.",
    });
});
export const updateComment = catchAsync(async (req, res, next) => {
    console.log("reqqqqqqqqqqq", req?.params);
    await checkExists(CommentModel, next, "نظر", req.params.id);
    const newComment = await CommentModel.findByIdAndUpdate(req.params?.id, {
        $set: req.body,
    }, {
        new: true,
        runValidators: true,
    });
    res.status(201).json({
        status: 201,
        message: "نظر با موفقیت به روز رسانی شد.",
        data: newComment,
    });
});
//# sourceMappingURL=comment.js.map