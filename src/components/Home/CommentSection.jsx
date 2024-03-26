import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getPostById, postComment } from "../auth/Services/postService.jsx"
import { getRecordById } from "../auth/Services/recordService.jsx"
import { getUserById } from "../auth/Services/userService.jsx"
import { Comment } from "./Comment.jsx"

export const CommentSection = ({currentUser}) => {
    const {postId} = useParams()
    const [post, setPost] = useState({})
    const [record, setRecord] = useState({})
    const [postAuthor, setPostAuthor] = useState({})
    const [userCommentBody, setUserCommentBody] = useState("")

    useEffect(() => {
        getPostById(postId).then((postObj) => {
            getUserById(postObj.userId).then((userObj) => {
                setPostAuthor(userObj[0])
            })
            getRecordById(postObj.recordId).then((recordObj) => {
                setRecord(recordObj)
            })
            setPost(postObj)
        })
    }, [postId])

    const changeCommentValue = (event) => {
        setUserCommentBody(event.target.value)
    }

    const requestSubmitComment = () => {
        if (userCommentBody !== "") {
        const comment = {
            postId: post.id,
            userId: currentUser?.id,
            commentText: userCommentBody
        }
        postComment(comment).then(() => {
            window.location.reload()
        })}
    }

    return(
        <div className="comments-body">
            <div className="original-post">
                <h4>{postAuthor.name} is listening to {record.recordName} by {record.artist}</h4>
                <p>{post.body}</p>
            </div>
            <div className="comment-section">
                <p className="comments-heading">Comments...</p>
                {post?.comments?.map((comment) => {
                    return(
                        <Comment comment={comment} key={comment.id}/>
                    )
                })}
            </div>
            <div className="user-comment">
                <input name="comment-if" className="input-comment" onChange={changeCommentValue}/>
                <button className="submit-comment-btn" onClick={requestSubmitComment}>Add Comment...</button>
            </div>
        </div>
    )
}