import { useState } from "react"

export const InputField = () => {
  const [text, setText] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (text === "") return

    const res = await fetch("/api/records", {
      method: "POST",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text })
    })

    console.log(await res.json())
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Simple field</h3>
      <input
        type="text"
        value={text}
        onChange={({ target }) => setText(target.value)}
      />
      <button type="submit">Click!</button>
    </form>
  )
}
