import type { Request } from "express";
import multer from "multer";
import CustomError from "../tools/CustomError.js";

const acceptedTypes = ["jpg", "png", "webp", "jpeg"];

const fileFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback
) => {
  if (file?.size > Number(process.env.MAXFILESIZE) * 1000000) {
    cb(null, false);
    cb(
      new CustomError(
        400,
        `file size is more than ${Number(process.env.MAZFILESIZE)} MG`
      )
    );
  }
  console.log(file.mimetype);
  const mimeType = file?.mimetype.split("/");
  if (
    mimeType[0] !== "image" ||
    (mimeType[1] && !acceptedTypes.includes(mimeType[1]?.toLocaleLowerCase()))
  ) {
    cb(null, false);
    cb(new CustomError(400, `image format is not correct!`));
  }
  cb(null, true);
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    const uploadName = `${Math.round(Date.now())}-${file?.originalname}`;
    cb(null, uploadName);
  },
});

const Multer = multer({
  storage: storage,
  fileFilter: fileFilter,
});

export default Multer;
