export const getRecords = () => {
    return fetch("http://localhost:8000/records?_expand=genre").then((res) => res.json())
}

export const getGenres = () => {
    return fetch("http://localhost:8000/genres").then((res) => res.json())
}