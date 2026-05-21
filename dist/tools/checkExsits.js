import CustomError from "./CustomError.js";
import mongoose from "mongoose";
const checkExists = async (modal, next, itemName, id, populate, populateFields) => {
    if (!mongoose.Types.ObjectId.isValid(id)) {
        console.log("req is here");
        return next(new CustomError(400, "فرمت آیدی صحیح نمیباشد."));
    }
    let item;
    if (populate && populateFields) {
        item = await modal.findById(id).populate(populate, populateFields);
    }
    else {
        item = await modal.findById(id);
    }
    if (!item) {
        return next(new CustomError(400, `${itemName} با این آیدی وجود ندارد!`));
    }
    return item;
};
export default checkExists;
//# sourceMappingURL=checkExsits.js.map