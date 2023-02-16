import { useEffect, useRef } from "react";
// import { useSocket } from "../hooks/use-socket";
import io from "socket.io-client";

const url = "http://localhost:3000"; // import.meta.env.VITE_WS_URL;
const path = "/game";

const socket = io(url, {
  transports: ["websocket"], // Required when using Vite
  // path,
});

function useInterval(callback: () => void, delay: number) {
  const savedCallback = useRef<() => void>(callback);

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    let id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
}

export const RealTimeField = () => {
  socket.connect();
  const sendPing = () => {
    socket.emit("ping");
    socket.emit("message", "qqqqqqqqqqqqqqqqqqqqq");
    console.log("🚀 ~ sendPing ~ ping");
  };
  // const [socket, text, sendMessage] = useSocket(url);

  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected");
      // setIsConnected(true);
    });

    socket.on("disconnect", () => {
      console.log("disconnected");
      // setIsConnected(false);
    });

    socket.on("pong", () => {
      console.log("pong");
      // setLastPong(new Date().toISOString());
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("pong");
    };
  }, []);

  useInterval(() => {
    socket.emit("ping", "shit");
    // console.log("🚀 ~ sendPing ~ ping");
  }, 1500);

  socket.on("message", (data) =>
    console.log("🚀 ~ RealTimeField ~ data", data)
  );

  console.log("🚀 ~ socket.on ~ socket", socket);

  return (
    <div>
      <button onClick={sendPing}>aaaaaaaaa1111111111aaaaa</button>
      {/* <h3>Real time field: {text}</h3> */}
      {/* <input
        type="text"
        value={text}
        onChange={({ target }) => sendMessage(target.value)}
      /> */}

      {/* <h2>{socket ? "Connected" : "Not Connected"}</h2> */}
    </div>
  );
};
