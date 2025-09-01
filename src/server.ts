import { createServer } from "http";
import mongoose from "mongoose";
import app from "./app.js";

const server = createServer(app);

mongoose
  .connect("mongodb://localhost:27017/sarooj")
  .then(() => {
    console.log("mongoose connected!");
  })
  .catch((err) => console.log(`mongoose connection error : ${err}`));

server.listen(8000, () => {
  console.log(`server listening on port ${8000}`);
});
