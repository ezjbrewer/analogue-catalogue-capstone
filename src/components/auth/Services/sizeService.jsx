export const getSizes = () => {
    return fetch("http://localhost:8000/sizes").then((res) => res.json())
}