import mongoose from "mongoose";
import type { IProjectSchema } from "../types/project.js";
import idPlugin from "../tools/idPlugin.js";
import pictureDeleter from "../tools/pictureDeleter.js";

const beforeAfterSchema = new mongoose.Schema({
  before: {
    name: {
      type: String,
      required: [true, "before image name is required!"],
    },
    pictureId: {
      type: mongoose.Types.ObjectId,
      required: [true, "before image PictureId is required!"],
      ref: "Picture",
    },
  },
  after: {
    name: {
      type: String,
    },
    pictureId: {
      type: mongoose.Types.ObjectId,
      ref: "Picture",
    },
  },
});
const beforeAfterEnSchema = new mongoose.Schema({
  beforeEn: {
    nameEn: {
      type: String,
      required: [true, "before image name is required!"],
    },
    pictureIdEn: {
      type: mongoose.Types.ObjectId,
      required: [true, "before image PictureId is required!"],
      ref: "Picture",
    },
  },
  afterEn: {
    nameEn: {
      type: String,
    },
    pictureIdEn: {
      type: mongoose.Types.ObjectId,
      ref: "Picture",
    },
  },
});
const stepSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "step name is required!"],
  },
  pictureId: {
    type: mongoose.Types.ObjectId,
    ref: "Picture",
  },
  alt: {
    type: String,
    required: [true, "step image alt  is required!"],
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  video: {
    type: String,
  },
  description: {
    type: String,
  },
});
const stepsEnSchema = new mongoose.Schema({
  nameEn: {
    type: String,
    required: [true, "step name is required!"],
  },
  pictureIdEn: {
    type: mongoose.Types.ObjectId,
    ref: "Picture",
  },
  altEn: {
    type: String,
    required: [true, "step image alt  is required!"],
  },
  isActiveEn: {
    type: Boolean,
    default: false,
  },
  videoEn: {
    type: String,
  },
  descriptionEn: {
    type: String,
  },
});

const projectSchema = new mongoose.Schema<IProjectSchema>(
  {
    title: {
      type: String,
      required: [true, "title field is required"],
      unique: [true, "title field is unique"],
      lowercase: true,
    },
    titleEn: {
      type: String,
      unique: true,
      default: null,
      lowercase: true,
    },
    description: {
      type: String,
      required: [true, "description field is required"],
    },
    descriptionEn: {
      type: String,
    },
    area: {
      type: Number,
      required: [true, "area field is required"],
    },
    artitectureStyle: {
      type: String,
    },
    artitectureStyleEn: {
      type: String,
    },
    alt: {
      type: String,
      required: [true, "ArtitectureStyle field is required"],
    },
    altEn: {
      type: String,
    },
    video: {
      type: String,
    },
    address: {
      type: String,
      required: [true, "address field is required"],
    },
    addressEn: {
      type: String,
    },
    startDate: {
      type: Date,
      required: [true, "start date field is required"],
    },
    endDate: {
      type: Date,
    },
    categoryId: {
      type: mongoose.Types.ObjectId,
      required: [true, "categoryId field is required"],
      ref: "Category",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    pictureId: {
      type: mongoose.Types.ObjectId,
      required: [true, "picture id field is required!"],
      ref: "Picture",
    },
    images: [beforeAfterSchema],
    imagesEn: [beforeAfterEnSchema],
    steps: [stepSchema],
    stepsEn: [stepsEnSchema],
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

projectSchema.plugin(idPlugin);
projectSchema.pre("findOneAndDelete", async function (next) {
  const filter = this.getFilter();
  const doc = await this.model.findOne(filter);
  if (doc) {
    await pictureDeleter(doc?.pictureId);
  }
  next();
});

const ProjectModel = mongoose.model("Project", projectSchema);

export default ProjectModel;
