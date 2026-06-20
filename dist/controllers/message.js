import catchAsync from "../tools/catchAsync.js";
import { ApiFeatures } from "../tools/apiFeatures.js";
import MessageModel from "../models/message.js";
import groupMessagesByDay from "../tools/groupByDate.js";
export const getAllMessages = catchAsync(async (req, res) => {
    const query = new ApiFeatures(MessageModel.find(), req?.query);
    const messages = await query.filtering().execute();
    res.status(200).json({
        status: 200,
        message: "لیست پیام ها با موفقیت دریافت شد.",
        data: groupMessagesByDay(messages),
    });
});
//# sourceMappingURL=message.js.map