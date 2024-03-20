import { useEffect, useState } from "react"
import { getUserById } from "../auth/Services/userService.jsx"
import { getRecords } from "../auth/Services/recordService.jsx"
import { useNavigate } from "react-router-dom"
import "./profile.css"

export const Profile = ({currentUser}) => {
    const [user, setUser] = useState({})
    const [records, setRecords] = useState([])

    const navigate = useNavigate()

    useEffect(() => {
        getUserById(currentUser.id).then((userObj) => {
            setUser(userObj[0])
        })
    }, [])
    
    useEffect(() => {
        getRecords().then((allRecords) => {
            const filteredRecords = allRecords.filter(record => {
                return record.userId === currentUser.id
            })
            setRecords(filteredRecords)
        })
    }, [currentUser])
    
    return(
        <div className="profile-container">
            <div className="profile-heading">
                <h2>Profile</h2>
            </div>
            <div className="profile-label">
                <h4>Name: {user?.name}</h4>
            </div>
            <div className="profile-label">
                <h4>Email: {user?.email}</h4>
            </div>
            <label>
                You have <b>{records.length} records</b> in your catalogue!
            </label>
            <div className="edit-profile-btn">
                <button className="edit-btn" onClick={() => navigate("/editProfile")}>Edit Profile</button>
            </div>
        </div>
    )
}