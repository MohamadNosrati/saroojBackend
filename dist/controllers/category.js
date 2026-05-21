import catchAsync from "../tools/catchAsync.js";
import CategoryModel from "../models/category.js";
import checkExists from "../tools/checkExsits.js";
import pictureDeleter from "../tools/pictureDeleter.js";
export const createCategory = catchAsync(async (req, res) => {
    const category = await CategoryModel.create(req.body);
    res.status(201).json({
        status: 201,
        message: "دسته یندی با موفقیت صاخته شد.",
        data: category,
    });
});
export const getAllCategorys = catchAsync(async (req, res) => {
    const categories = await CategoryModel.find().populate("pictureId", [
        "image",
        "id",
    ]);
    res.status(201).json({
        status: 201,
        message: "لیست دسته یندی ها با موفقیت دریافت شد.",
        data: categories,
    });
});
export const findCategory = catchAsync(async (req, res, next) => {
    const category = await checkExists(CategoryModel, next, "دسته بندی", req.params?.id, "pictureId", ["image", "id"]);
    res.status(201).json({
        status: 201,
        message: "دسته بندی با موفقیت دریافت شد",
        data: category,
    });
});
export const deleteCategory = catchAsync(async (req, res, next) => {
    await checkExists(CategoryModel, next, "دسته بندی", req.params?.id);
    await CategoryModel.findByIdAndDelete(req.params?.id);
    res.status(201).json({
        status: 201,
        message: "دسته یندی با موفقیت پاک شد.",
    });
});
export const updateCategory = catchAsync(async (req, res, next) => {
    const category = await checkExists(CategoryModel, next, "دسته بندی", req.params?.id);
    const newCategory = await CategoryModel.findByIdAndUpdate(req?.params?.id, { $set: req?.body }, {
        new: true,
        runValidators: true,
    });
    if (category?.pictureId !== newCategory?.pictureId) {
        await pictureDeleter(category?.pictureId);
    }
    res.status(201).json({
        status: 201,
        message: "دسته یندی با موفقیت به روز رسانی شد.",
        data: newCategory,
    });
});
//# sourceMappingURL=category.js.map