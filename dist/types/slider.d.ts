import mongoose from "mongoose";
export interface ISliderSchema {
    title: string;
    description: string;
    isActive: boolean;
    pictureId: mongoose.Schema.Types.ObjectId;
    mobilePictureId: mongoose.Schema.Types.ObjectId;
    alt: string;
    createdAt: Date;
    updatedAt: Date;
    link: string;
}
//# sourceMappingURL=slider.d.ts.map