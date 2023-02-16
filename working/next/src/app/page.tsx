"use client"

import Image from "next/image"
import { Inter } from "@next/font/google"
import styles from "./page.module.css"

const inter = Inter({ subsets: ["latin"] })

import { events } from "@/lib/events"
import { io } from "socket.io-client"
import { useEffect } from "react"

const NICKNAME = "nickname"
const LOGGED_OUT = "loggedOut"
const LOGGED_IN = "loggedIn"

const nickname = localStorage.getItem(NICKNAME)

const socket = io("http://localhost:3000", {
  // autoConnect: false,
  port: "3000",
  // path: "/",
})
export default function Home() {
  console.log("🚀 ~ socket", socket)

  useEffect(() => {
    socket.on("someShit", args => console.log("🚀 ~ App ~ args", args))
    socket.on("message", args => console.log("🚀 ~ App ~ args", args))

    socket.on("pong", () => {
      console.log(
        "🚀 ~ socket.on ~ new Date().toISOString()",
        new Date().toISOString(),
      )
    })

    return () => {
      socket.off("someShit")
      socket.off("message")
      socket.off("pong")
    }
  }, [])

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault()
    // socket.emit(events.setNickname, { nickname })

    socket.on("someShit", args => console.log("🚀 ~ App ~ args", args))
    socket.on("message", args => console.log("🚀 ~ App ~ args", args))
    // socket.on(events.newUser, handleNewUser)
    // socket.on(events.disconnected, handleDisconnected)
    // socket.on(events.newMsg, handleNewMessage)
    // socket.on(events.beganPath, handleBeganPath)
    // socket.on(events.strokedPath, handleStrokedPath)
    // socket.on(events.filled, handleFilled)
    // socket.on(events.playerUpdate, handlePlayerUpdate)
    // socket.on(events.gameStarted, handleGameStarted)
    // socket.on(events.leaderNotif, handleLeaderNotif)
    // socket.on(events.gameEnded, handleGameEnded)
    // socket.on(events.gameStarting, handleGameStarting)
  }

  const click = () => {
    socket.emit("someShit", "asdf asdf asdf asdf asdf")
    socket.emit("message", "asdf asdf asdf asdf asdf input.value")
    console.log("aaaaaaaaaaaaaaaaa" + new Date())
  }

  return (
    <>
      {/* <RealTimeField /> */}
      <div className="loginBox">
        <button onClick={click}>aaaaaaaaaaaaaa</button>
        <form id="jsLogin" onSubmit={handleSubmit}>
          <input
            name="nickname"
            placeholder="Whats your nickname"
            type="text"
          />
        </form>
      </div>
      {/* <div className="gameContainer" id="jsGame">
        <div className="main">
          <div id="jsNotifs" />
          <canvas className="canvas" id="jsCanvas" />
          <div className="controls" id="jsControls">
            <button id="jsMode">Fill</button>
            <div className="colors">
              <div
                className="color jsColor"
                style={{ backgroundColor: "rgb(0, 0, 0)" }}
              />
              <div
                className="color jsColor"
                style={{ backgroundColor: "rgb(255,255,255)" }}
              />
              <div
                className="color jsColor"
                style={{ backgroundColor: "rgb(255,59,48)" }}
              />
              <div
                className="color jsColor"
                style={{ backgroundColor: "rgb(255,149,0)" }}
              />
              <div
                className="color jsColor"
                style={{ backgroundColor: "rgb(255,204,0)" }}
              />
              <div
                className="color jsColor"
                style={{ backgroundColor: "rgb(76,217,100)" }}
              />
              <div
                className="color jsColor"
                style={{ backgroundColor: "rgb(90,200,250)" }}
              />
              <div
                className="color jsColor"
                style={{ backgroundColor: "rgb(0,122,255)" }}
              />
              <div
                className="color jsColor"
                style={{ backgroundColor: "rgb(88,86,214)" }}
              />
            </div>
          </div>
        </div>
        <div className="chat">
          <div className="player__board" id="jsPBoard" />
          <ul className="chat__messages" id="jsMessages" />
          <form className="chat__form" id="jsSendMsg">
            <input placeholder="Write a message" type="text" />
          </form>
        </div>
      </div> */}
    </>
  )
}
