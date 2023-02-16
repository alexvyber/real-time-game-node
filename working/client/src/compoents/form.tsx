import { useState } from "react"

type Props = { formTitle: string; buttonTitle: string; fetchUrl: string }

export const Form = ({ formTitle, buttonTitle, fetchUrl }: Props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (email === "" || password === "") return

    const res = await fetch(fetchUrl, {
      method: "POST",
      mode: "cors",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })

    console.log(await res.json())
  }

  return (
    <div className="App">
      <h2>{formTitle}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button type="submit">{buttonTitle}</button>
      </form>
    </div>
  )
}
