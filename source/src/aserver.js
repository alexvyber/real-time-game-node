// import { join } from "path";
import express from "express"
import socketIO from "socket.io"
// import logger from "morgan";
import socketController from "./socketController"
// import events from "./events";

const PORT = 3000
const app = express()

const handleListening = () => console.log(`✅ Server running: http://localhost:${PORT}`)

const server = app.listen(PORT, handleListening)

const io = socketIO.listen(server)

// io.on("connection", (socket) => socketController(socket, io));
