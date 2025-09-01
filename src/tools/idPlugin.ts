import type mongoose from "mongoose";

const value = () => ({
  virtuals: true,
  transform: (_: any, ret: any) => {
    ret.id = ret._id;
    delete ret._id;
    return ret;
  },
});

const idPlugin = (schema: mongoose.Schema) => {
  schema.set("toJSON", value());
  schema.set("toObject", value());
};

export default idPlugin;
