export const getSpeeds = () => {
    return fetch("http://localhost:8000/speeds").then((res) => res.json())
}