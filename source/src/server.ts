import { Server } from "node:http"
import express from "express"
import socketio from "socket.io"
import cors from "cors"

import { router } from "./router"
import { protect } from "./modules/auth"
import { login, register } from "./handlers/user"

// import pinoExpress from "express-pino-logger"
// import pinoBasic from "pino"
// const pinoLogger = pinoBasic()

const app = express()
// const server = http.createServer(app)
const http = new Server(app)
const io = new socketio.Server(http, {
  cors: {
    origin: ["*", "http://localhost:5000"],
    credentials: false
  }
})

// app.use(pinoExpress())
// app.use(
//   cors({
//     origin: "*"
//     // "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
//     // "preflightContinue": false,
//     // "optionsSuccessStatus": 204
//   })
// )

app.use(express.json())
// app.use(
//   express.urlencoded({
//     extended: true,
//   }),
// )

// app.use((req, res, next) => {
//   const isRandom = false

//   // @ts-ignore
//   req.some = "QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ"
//   // @ts-ignore
//   res.some = "QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ"

//   if (isRandom) {
//     Math.random() > 0.5 ? res.status(404).send("nope") : next()
//   } else {
//     next()
//   }
// })

// app.get("/", (req, res) => {
//   res.status(200)

//   // @ts-ignore
//   res.json({ message: "hello", some: req.some, fromRes: res.some })
//   res.end()
// })

// app.get("/", (req, res) => {
//   res.send("<h1>Hello world</h1>")
// })

// app.use("/api", protect, router)

// app.post("/register", register)
// app.post("/login", login)

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/static/index.html")
})

// io.on('connection', (socket) => {
//   console.log('a user connected');
// });

io.on("connection", socket => {
  console.log("a user connected")

  socket.on("disconnect", () => {
    console.log("user disconnected")
  })

  socket.on("message", msg => {
    console.log("🚀 ~ socket.on ~ msg", msg + msg)
    io.emit("message", msg)
  })

  socket.on("someShit", (arg: any) => {
    console.log("🚀 ~ arg", arg)
    io.emit("message", arg)
  })

  io.emit("someShit", "asdfasdfasdfasdfasdf")

  io.emit("message", "connected")
})

export { http }
