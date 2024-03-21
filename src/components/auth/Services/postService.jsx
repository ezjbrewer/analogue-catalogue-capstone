export const getAllPosts = () => {
    return fetch("http://localhost:8000/posts/?_expand=user&_expand=record&_embed=likes&_embed=comments").then((res) => res.json())
}

export const getPostById = (postId) => {
    return fetch(`http://localhost:8000/posts/${postId}?_expand=user&_expand=record&_embed=likes&_embed=comments`).then((res) => res.json())
}