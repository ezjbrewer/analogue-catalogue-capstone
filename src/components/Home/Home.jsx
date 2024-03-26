import { useEffect, useState } from "react"
import { getAllPosts } from "../auth/Services/postService.jsx"
import { useNavigate } from "react-router-dom"
import { Comment } from "./Comment.jsx"
import { Link } from "react-router-dom"
import { createLike, deleteLike, getAllLikes } from "../auth/Services/likesService.jsx"
import "./Home.css"

export const Home = ({currentUser}) => {
    const [allPosts, setAllPosts] = useState([])
    const [allLikes, setAllLikes] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getAllPosts().then((posts) => {
            setAllPosts(posts)
        })
        getAllLikes().then((likes) => {
            setAllLikes(likes)
        })
    }, [])
    

    const toggleLike = async (post) => {
        const userHasLiked = allLikes.some(like => like.userId === currentUser.id && like.postId === post.id)

        if (userHasLiked) {
            const userLike = allLikes.find(like => like.userId === currentUser.id && like.postId === post.id)
            await deleteLike(userLike).then(() => {
                window.location.reload()
            })
        } else {
            const likeObj = {
                userId: currentUser.id,
                postId: post.id,
            }
            await createLike(likeObj).then(() => {
                window.location.reload()
            })
        }
        getAllLikes().then((likes) => {
            setAllLikes(likes)
        })
    }


    return(
        <div className="home-body">
            {allPosts.map((post) => {
                return(

                        <div key={post.id} className="post-card">
                            <div className="post-home-info">
                                <div className="og-post">
                                    <p><b>{post?.user?.name}</b> is listening to <b>{post?.record?.recordName}</b> by <b>{post?.record?.artist}</b></p>
                                    <p className="post-body">{post.body}</p>
                                </div>
                                <div className="comments-home">
                                    <p className="comment-area-label">Recent Comments...</p>
                                    {post.comments.length > 0 ? (
                                        post.comments.slice(-2).map((comment) => (
                                            <Comment comment={comment} key={comment.id}/>
                                        ))) :
                                        (<p>No Comments...</p>)}
                                    {currentUser?.id === post?.user?.id && (
                                        <button className="edit-comment-btn">
                                            <Link className="link-btn" to={`/editPost/${post.id}`}>Edit Post</Link>
                                        </button>
                                )}
                                    <button className="add-comment-btn">
                                        <Link className="link-btn" to={`/comments/${post.id}`}>Comment...</Link>
                                    </button>
                                    <button className="like-btn" onClick={() => toggleLike(post)}>Like {post?.likes.length}</button>
                                </div>
                            </div>
                        </div>

                )
            })}
        </div>
    )
}