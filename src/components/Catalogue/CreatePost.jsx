import { useParams } from "react-router-dom"
import { getRecordById } from "../auth/Services/recordService.jsx"
import { useEffect, useState } from "react"
import { getUserById } from "../auth/Services/userService.jsx"
import { submitPost } from "../auth/Services/postService.jsx"
import { useNavigate } from "react-router-dom"

export const CreatePost = ({currentUser}) => {
    const {recordId} = useParams()
    const [record, setRecord] = useState({})
    const [user, setUser] = useState({})
    const [newBody, setBody] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        getRecordById(recordId).then((recordObj) => {
            setRecord(recordObj)
        })
    }, [recordId])

    useEffect(() => {
        getUserById(currentUser.id).then((userObj) => {
            setUser(userObj[0])
        })
    }, [currentUser])

    const changeBodyValue = (event) => {
        setBody(event.target.value)
    }

    const requestSubmitPost = () => {
        const newPost = {
            userId: currentUser.id,
            recordId: record.id,
            body: newBody
        }
        submitPost(newPost).then(() => {
            navigate("/home")
        })
    }

    return(
        <div className="new-post-body">
            <h1>Share your record</h1>
            <h4>{user?.name} is listening to {record.recordName} by {record.artist}</h4>
            <div className="post-user-interaction">
                <textarea name="text-input-post" className="post-thoughts-input" placeholder="Share your thoughts..." value={newBody} onChange={changeBodyValue}/>
                <button onClick={() => requestSubmitPost()} className="post-submit-btn">Create Post</button>
            </div>
        </div>
    )
}