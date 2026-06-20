import mongoose from "mongoose";
import idPlugin from "../tools/idPlugin.js";
import pictureDeleter from "../tools/pictureDeleter.js";
const sliderSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title field is required"],
        lowercase: true,
        unique: [true, "title filed must be unique!"],
    },
    link: {
        type: String,
        required: [true, "title field is required"],
    },
    alt: {
        type: String,
        required: [true, "title field is required"],
    },
    description: {
        type: String,
        required: [true, "description field is required"],
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    pictureId: {
        type: mongoose.Types.ObjectId,
        ref: "Picture",
    },
    mobilePictureId: {
        type: mongoose.Types.ObjectId,
        ref: "Picture",
    },
}, {
    timestamps: true,
    versionKey: false,
});
sliderSchema.plugin(idPlugin);
sliderSchema.pre("findOneAndDelete", async function (next) {
    const filter = this.getFilter();
    const doc = await this.model.findOne(filter);
    if (doc) {
        await pictureDeleter(doc?.pictureId);
        await pictureDeleter(doc?.mobilePictureId);
    }
    next();
});
const SliderModel = mongoose.model("Slider", sliderSchema);
export default SliderModel;
//# sourceMappingURL=slider.js.map