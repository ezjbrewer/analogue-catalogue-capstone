import { useEffect, useState } from "react"
import { getUserById, updateUser } from "../auth/Services/userService.jsx"
import { useNavigate } from "react-router-dom"

export const EditProfile = ({currentUser}) => {
    const [user, setUser] = useState({})
    
    const navigate = useNavigate()

    useEffect(() => {
        getUserById(currentUser.id).then((userObj) => {
            setUser(userObj[0])
        })
    }, [])

    const handleInputChange = (event) => {
        const stateCopy = { ...user }
        stateCopy[event.target.name] = event.target.value
        setUser(stateCopy)
      }

    const updateUserObj = () => {
        updateUser(user).then(() => {
            navigate("/profile")
        })
    }
    
    return(
        <div className="edit-profile-container">
            <div className="profile-heading">
                <h2>Edit Profile</h2>
            </div>
            <div className="edit-name">
                <h4>Name: <input className="edit-input" type="text" name="name" value={user?.name ? user.name : ""} onChange={handleInputChange}/></h4>
            </div>
            <div className="edit-email">
                <h4>Email: <input className="edit-input" type="text" name="email" value={user?.email ? user.email : ""} onChange={handleInputChange}/></h4>
            </div>
            <div className="save-profile-btn-div">
                <button onClick={updateUserObj}>Save Changes</button>
            </div>
        </div>
    )
}