import jwt from "jsonwebtoken";

const tokenGenerator = (id:string) => {
  return jwt.sign({ id: id }, process.env.JWTSECRETKEY as string,{
    expiresIn:Number(process.env.EXPIRATIONDATE) * 24 * 3600 * 1000
  });
};

export default tokenGenerator;