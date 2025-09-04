import mongoose from "mongoose";
import idPlugin from "../tools/idPlugin.js";

const pictureSchema = new mongoose.Schema({
    image:{
        type:String,
        required:[true,"image field is required!"]
    }
},{
    versionKey:false,
    timestamps:true,
})

pictureSchema.plugin(idPlugin);

const PictureModel = mongoose.model("Picture",pictureSchema);

export default PictureModel;