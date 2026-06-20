import catchAsync from "../tools/catchAsync.js";
import ConversationModel from "../models/conversation.js";
import { ApiFeatures } from "../tools/apiFeatures.js";
export const getUserConversations = catchAsync(async (req, res) => {
    console.log(req?.query);
    const query = new ApiFeatures(ConversationModel.find(), req?.query);
    const conversations = await query.filtering().populate("participants", ["userName", "id"], {
        path: "pictureId",
        select: ["image", "id"]
    }).execute();
    res.status(200).json({
        status: 200,
        message: "لیست دسته یندی ها با موفقیت دریافت شد.",
        data: conversations,
    });
});
//# sourceMappingURL=conversation.js.map