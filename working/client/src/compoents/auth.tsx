import { Form } from "./form"

const handleLogout = async () =>
  await fetch("/api/logout", {
    method: "POST"
  })

export const Auth = () => (
  <div>
    <div className="App">
      <Form
        formTitle="Register Form"
        buttonTitle="register"
        fetchUrl="/api/register"
      />
      <br />
      <Form formTitle="Login Form" buttonTitle="login" fetchUrl="/api/login" />
    </div>
    <button onClick={handleLogout}>log out</button>
  </div>
)
