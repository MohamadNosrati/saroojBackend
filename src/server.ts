import { createServer } from "http";
import app from "./app.ts";
import mongoose from "mongoose";

const server = createServer(app);

mongoose.connect("mongodb://localhost:27017/sarooj").then(()=>{
    console.log("mongoose connected!")
}).catch((err)=>console.log(`mongoose connection error : ${err}`))

server.listen(8000,()=>{
    console.log(`server listening on port ${8000}`)
})