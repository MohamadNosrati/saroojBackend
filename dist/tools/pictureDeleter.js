import fs from "fs";
import PictureModel from "../models/picture.js";
export const unlinkFile = (image) => {
    if (image) {
        fs.unlink(`./uploads/${image}`, (err) => {
            if (err) {
                console.log(err);
            }
        });
    }
};
const pictureDeleter = async (pictureId) => {
    const picture = await PictureModel.findByIdAndDelete(pictureId);
    unlinkFile(picture?.image);
};
export default pictureDeleter;
//# sourceMappingURL=pictureDeleter.js.map