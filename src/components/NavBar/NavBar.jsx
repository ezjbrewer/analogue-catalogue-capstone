import "./NavBar.css"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export const NavBar = () => {
    const navigate = useNavigate()

    return <ul className="navbar">
        <li className="navbar-item">
            <Link className="navbar-link" to='/home'>Home</Link>
        </li>
        <li className="navbar-item">
            <Link className="navbar-link" to='/myCatalogue'>My Catalogue</Link>
        </li>
        <li className="navbar-item">
            <Link className="navbar-link" to="/profile">Profile</Link>
        </li>
        {localStorage.getItem("analogue_user") ? (
  <li className="navbar-item navbar-logout">
    <Link
      className="navbar-link"
      to=""
      onClick={() => {
        localStorage.removeItem("analogue_user")
        navigate("/", { replace: true })
      }}
    >
      Logout
    </Link>
  </li>
) : (
  ""
)}
    </ul>
}