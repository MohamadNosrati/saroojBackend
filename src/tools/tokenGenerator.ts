import jwt from "jsonwebtoken";

const tokenGenerator = (id: string) => {
  return jwt.sign({ id: id }, process.env.JWTSECRETKEY as string, {
    expiresIn: process.env.EXPIRATIONTIME as any 
  });
};

export default tokenGenerator;
