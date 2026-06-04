import { createServer } from "http";
import mongoose from "mongoose";
import app from "./app.js";
import webpush from "web-push";

const server = createServer(app);

webpush.setVapidDetails(
  process.env.VAPIDSSUBJECT as string,
  process.env.VAPIDPUBLICKEY  as string,
  process.env.VAPIDPRIVATEKEY as string,
);

mongoose
  .connect("mongodb://localhost:27017/sarooj")
  .then(() => {
    console.log("mongoose connected!");
  })
  .catch((err) => console.log(`mongoose connection error : ${err}`));

server.listen(8000, () => {
  console.log(`server listening on port ${8000}`);
});
