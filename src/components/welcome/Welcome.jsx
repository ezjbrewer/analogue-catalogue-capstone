import "./Welcome.css"
import { useNavigate } from "react-router-dom"

export const Welcome = () => {
    const navigate = useNavigate()
    
    return(
        <div className="welcome-card">
           <div className="welcome-sign">
                <h1>Welcome to Analogue Catalogue!</h1>
           </div>
           <div className="welcome-msg">
                <button className="welcome-btn"
                onClick={() => {
                    console.log("My Catalogue!")
                }}>
                    See your catalogue!
                </button>
           </div>
        </div>
    )
}