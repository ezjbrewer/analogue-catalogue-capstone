export const getTypes = () => {
    return fetch("http://localhost:8000/Types").then((res) => res.json())
}