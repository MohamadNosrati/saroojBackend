import jwt from "jsonwebtoken";
const tokenGenerator = (id) => {
    return jwt.sign({ id: id }, process.env.JWTSECRETKEY, {
        expiresIn: process.env.EXPIRATIONTIME
    });
};
export default tokenGenerator;
//# sourceMappingURL=tokenGenerator.js.map