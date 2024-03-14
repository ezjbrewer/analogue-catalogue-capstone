export const getTypes = () => {
    return fetch("http://localhost:8000/types").then((res) => res.json())
}