import { useEffect, useState } from "react"
import { getUserById } from "../auth/Services/userService.jsx"

export const Comment = ({comment}) => {
    const [user, setUser] = useState("")

    useEffect(() => {
        getUserById(comment.userId).then((userObj) => {
            setUser(userObj[0])
        })
    }, [comment])
    
    return(
        <div key={comment.id}><b>{user?.name}</b>: {comment.commentText}</div>
    )
}