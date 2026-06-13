import type { Socket } from "socket.io";
import { eventNames } from "../config/socket.js";
import { io } from "../server.js";
import { socketHandlers } from "./eventHandlers.js";
import { socketManager } from "./manager.js";

