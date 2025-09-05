import mongoose from "mongoose";
import type { ITeamate } from "../types/team.js";
import idPlugin from "../tools/idPlugin.js";
import pictureDeleter from "../tools/pictureDeleter.js";

const teamsSchema = new mongoose.Schema<ITeamate>(
  {
    title: {
      type: String,
      required: [true, "title field is required"],
      lowercase: true,
    },
    position: {
      type: String,
      required: [true, "position field is required"],
      lowercase: true,
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
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);

teamsSchema.plugin(idPlugin);
teamsSchema.pre("findOneAndDelete", async function (next) {
  const filter = this.getFilter();
  const doc = await this.model.findOne(filter);
  if (doc) {
    await pictureDeleter(doc?.pictureId);
  }
  next();
});

const TeamModel = mongoose.model("Category", teamsSchema);

export default TeamModel;
