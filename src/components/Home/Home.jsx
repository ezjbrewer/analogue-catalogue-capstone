import { useEffect, useState } from "react"
import { getAllPosts } from "../auth/Services/postService.jsx"
import { getUserById } from "../auth/Services/userService.jsx"
import { Comment } from "./Comment.jsx"
import "./Home.css"

export const Home = () => {
    const [allPosts, setAllPosts] = useState([])

    useEffect(() => {
        getAllPosts().then((posts) => {
            setAllPosts(posts)
        })
    }, [])
    
    return(
        <div>
            {allPosts.map((post) => {
                return(

                        <div key={post.id} className="post-card">
                            <p><b>{post?.user?.name}</b> is listening to <b>{post?.record?.recordName}</b> by <b>{post?.record?.artist}</b></p>
                            <p>{post.body}</p>
                            <p>Recent Comments...</p>
                            {post.comments.map((comment) => {
                                return <Comment comment={comment} key={comment.id}/>
                            })}
                        </div>

                )
            })}
        </div>
    )
}