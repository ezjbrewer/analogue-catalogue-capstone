import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./Login.css"
import { getUserByEmail } from "./Services/userService.jsx"

export const Login = () => {
  const [email, set] = useState("coldlattenofoam@hipaf.com")
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()

    return getUserByEmail(email).then((foundUsers) => {
      if (foundUsers.length === 1) {
        const user = foundUsers[0]
        localStorage.setItem(
          "analogue_user",
          JSON.stringify({
            id: user.id,
          })
        )

        navigate("/")
      } else {
        window.alert("Invalid login")
      }
    })
  }

  return (
    <main className="auth-container">
      <section>
        <form className="auth-form" onSubmit={handleLogin}>
          <div className="login-heading">
            <img src="../images/catalogue-analogue-logo.png" width="90"/>
            <h1 className="header">Analogue Catalogue</h1>
          </div>
          <h2>Enter email</h2>
          <fieldset className="auth-fieldset">
            <div>
              <input
                type="email"
                value={email}
                size="50"
                className="auth-form-input"
                onChange={(evt) => set(evt.target.value)}
                placeholder="Email address"
                required
                autoFocus
              />
            </div>
          </fieldset>
          <fieldset className="auth-fieldset">
            <div>
              <button className="submit" type="submit">Sign in</button>
            </div>
          </fieldset>
        </form>
      </section>
      <section className="register-link">
        <Link className="register" to="/register">Not a cataloguer yet? Click here!</Link>
      </section>
    </main>
  )
}

