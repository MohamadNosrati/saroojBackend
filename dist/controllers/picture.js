import catchAsync from "../tools/catchAsync.js";
import PictureModel from "../models/picture.js";
import CustomError from "../tools/CustomError.js";
import checkExists from "../tools/checkExsits.js";
export const uploadPicture = catchAsync(async (req, res, next) => {
    console.log("res is here");
    if (!req.files) {
        return next(new CustomError(400, "images cant be undefind"));
    }
    const files = req.files;
    const data = files?.map((item) => ({
        image: item.filename,
    }));
    const pictures = await PictureModel.create(data);
    res.status(201).json({
        status: 201,
        message: "files uploaded successfully!",
        data: pictures,
    });
});
export const findPicture = catchAsync(async (req, res, next) => {
    const pciture = await checkExists(PictureModel, next, "تصویر", req.params?.id);
    res.status(200).json({
        status: 200,
        message: "file found successfully!",
        data: pciture,
    });
});
export const deletePicture = catchAsync(async (req, res, next) => { });
//# sourceMappingURL=picture.js.map