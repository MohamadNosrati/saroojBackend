import mongoose from "mongoose";
import idPlugin from "../tools/idPlugin.js";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "email field is required"],
      unique: [true, "email field must be unique"],
    },
    userName: {
      type: String,
      required: [true, "userName field is required"],
      min: [4, "userName minLenght 4 character!"],
      max: [40, "userName maxLenght 40 character!"],
      unique: [true, "userName field must be unique"],
    },
    password: {
      type: String,
      required: [true, "userName field is required"],
      min: [4, "userName minLenght 4 character!"],
      max: [40, "userName maxLenght 40 character!"],
    },
    role: {
      type: String,
      default: "admin",
      enum: {
        values: ["admin", "superAdmin"],
        message: "role can only be admin or superAdmin",
      },
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.pre("save", function (next) {
  this.userName = this.userName.trim();
  next();
});

userSchema.plugin(idPlugin);

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
