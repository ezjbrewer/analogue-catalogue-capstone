export const getConditions = () => {
    return fetch("http://localhost:8000/conditions").then((res) => res.json())
}