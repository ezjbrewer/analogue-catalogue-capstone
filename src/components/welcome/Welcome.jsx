import "./Welcome.css"
import { useNavigate } from "react-router-dom"

export const Welcome = () => {
    const navigate = useNavigate()
    
    return(
        <div className="welcome-card">
           <div className="welcome-sign">
                <h1>Welcome to Analogue Catalogue</h1>
           </div>
           <div>
                <p>Our mission here is to do one thing, and one thing only: To help you catalog your vinyl records! Did you know that analog signals are carved into the grooves of a record? This will allow your player needle to pick up on different vibrations within the grooves that are translated into sound by your record player!</p>
           </div>
           <div className="welcome-msg">
                <button className="welcome-btn"
                onClick={() => {
                    navigate("/myCatalogue")
                }}>
                    See your catalogue!
                </button>
           </div>
        </div>
    )
}