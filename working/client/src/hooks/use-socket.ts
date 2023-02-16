import { useEffect, useState } from "react"

export const useSocket = (url: string) => {
  const [socket, setSocket] = useState(/* <WebSocket> */ {} as WebSocket)
  const [text, setText] = useState("")

  useEffect(() => {
    const socket = new WebSocket(url)

    socket.onopen = _event => {
      console.log("socket conected")
    }

    socket.onmessage = event => setText(event.data)

    setSocket(socket)
    return () => socket.close()
  }, [url])

  const sendMessage = (msg: string) => socket.send(msg)

  return [socket, text, sendMessage] as const
}
