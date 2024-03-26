export const getAllLikes = async () => {
    return await fetch ("http://localhost:8000/likes").then((res) =>
    res.json()
    )
}

export const deleteLike = async (likeObj) => {
    const deleteOptions = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }

    const response = await fetch(`http://localhost:8000/likes/${likeObj.id}`, deleteOptions)
}

export const createLike = async (likeObj) => {
    const payload = {
        userId: likeObj.userId,
        postId: likeObj.postId,
    }
        
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
         },
        body: JSON.stringify(payload)
    }
        
    return await fetch ("http://localhost:8000/likes", postOptions)
}