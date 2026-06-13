import { createServer } from "http";
import mongoose from "mongoose";
import app from "./app.js";
import webpush from "web-push";
import { Server, Socket } from "socket.io";
import jwt, { type JwtPayload, type VerifyErrors } from "jsonwebtoken";
import CustomError from "./tools/CustomError.js";
import { eventNames } from "./config/socket.js";
import { socketHandlers } from "./socket/eventHandlers.js";
import { socketManager } from "./socket/manager.js";

const httpServer = createServer(app);

webpush.setVapidDetails(
  process.env.VAPIDSSUBJECT as string,
  process.env.VAPIDPUBLICKEY as string,
  process.env.VAPIDPRIVATEKEY as string,
);

mongoose
  .connect("mongodb://localhost:27017/sarooj")
  .then(() => {
    console.log("mongoose connected!");
  })
  .catch((err) => console.log(`mongoose connection error : ${err}`));

export const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

io.use(async (socket, next) => {
  try {
    const token = socket.handshake.auth.token;
    if (!token) {
      return next(new Error("Authentication required"));
    }

    jwt.verify(
      token,
      process.env.JWTSECRETKEY as string,
      (err: VerifyErrors | null, decoded: JwtPayload | undefined | string) => {
        if (err) {
          return next(new Error("Invalid token"));
        }

        socket.userId = (decoded as JwtPayload).id;
        next();
      },
    );
  } catch (error) {
    console.error("JWT verification failed:", JSON.stringify(error));
    next(new Error("Invalid token"));
  }
});

io.on(eventNames.connection, (socket: Socket) => {
  const userId = socket.userId;

  socketManager.registerUser(socket, userId as string);

  socket.on(eventNames.sendMessage, socketHandlers.sendMessage(socket));
  socket.on(eventNames.messageDelivered, socketHandlers?.messageDelivered);

  socket.on(eventNames.disconnect, () => {
    socketManager.unregisterUser(socket);
  });
});

httpServer.listen(8000, () => {
  console.log(`server listening on port ${8000}`);
});
