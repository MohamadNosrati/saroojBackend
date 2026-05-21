const value = () => ({
    virtuals: true,
    transform: (_, ret) => {
        ret.id = ret._id;
        delete ret._id;
        return ret;
    },
});
const idPlugin = (schema) => {
    schema.set("toJSON", value());
    schema.set("toObject", value());
};
export default idPlugin;
//# sourceMappingURL=idPlugin.js.map