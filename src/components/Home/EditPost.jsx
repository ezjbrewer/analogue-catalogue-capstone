import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserById } from "../auth/Services/userService.jsx";
import { getRecordById } from "../auth/Services/recordService.jsx";
import { deletePost, getPostById, submitPost, updatePost } from "../auth/Services/postService.jsx";
import { useNavigate } from "react-router-dom";

export const EditPost = ({ currentUser }) => {
    const { postId } = useParams();
    const [user, setUser] = useState({});
    const [newBody, setBody] = useState("")
    const [record, setRecord] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        getUserById(currentUser?.id).then((userObj) => {
            setUser(userObj[0])
        })
    }, [currentUser])

    useEffect(() => {
        getPostById(postId).then((postObj) => {
            if (currentUser.id === postObj.userId) {
            setBody(postObj.body)
            getRecordById(postObj.recordId).then((recordObj) => {
                setRecord(recordObj)
            })
        } else {
            navigate("/myCatalogue")
        }
        })
    }, [postId])

    const changeBodyValue = (event) => {
        setBody(event.target.value)
    }

    const requestUpdatePost = () => {
        const updatedPost = {
            id: postId,
            userId: currentUser?.id,
            recordId: record.id,
            body: newBody
        }
        updatePost(updatedPost).then(() => {
            navigate("/home")
        })
    }

    const requestDeletePost = () => {
        deletePost(postId).then(() => {
            navigate("/home")
        })
    }

    return (
        <div className="new-post-body">
        <h1>Edit Post</h1>
        <h4>
            {user?.name} is listening to {record?.recordName} by {record?.artist}
        </h4>
        <div className="post-user-interaction">
        <textarea name="text-input-post" className="post-thoughts-input" placeholder="Share your thoughts..." value={newBody} onChange={changeBodyValue} />
        <div className="post-edit-btns">
            <button onClick={requestUpdatePost} className="post-submit-btn">
                Update Post
            </button>
            <button onClick={requestDeletePost} className="post-delete-btn">
                Delete Post
            </button>
        </div>
        </div>
        </div>
    )
}
