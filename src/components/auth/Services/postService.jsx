export const getAllPosts = () => {
    return fetch("http://localhost:8000/posts/?_expand=user&_expand=record&_embed=likes&_embed=comments").then((res) => res.json())
}

export const getPostById = (postId) => {
    return fetch(`http://localhost:8000/posts/${postId}?_expand=user&_expand=record&_embed=likes&_embed=comments`).then((res) => res.json())
}

export const submitPost = (Post) => {
        const postOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(Post) 
        }
    
    return fetch("http://localhost:8000/posts", postOptions)
}

export const updatePost = (Post) => {
    const putOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(Post) 
    }

    return fetch(`http://localhost:8000/posts/${Post.id}`, putOptions)
}

export const deletePost = (PostId) => {
    const deleteOption = {
        method: "DELETE"
    }

    return fetch(`http://localhost:8000/posts/${PostId}`, deleteOption)
}

export const postComment = (CommentObj) => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(CommentObj) 
    }

return fetch("http://localhost:8000/comments", postOptions)
}