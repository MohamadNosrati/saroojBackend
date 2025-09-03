import jwt from "jsonwebtoken";

const tokenGenerator = (id:string) => {
  return jwt.sign({ id: id }, process.env.JWTSECRETKEY as string);
};

export default tokenGenerator;