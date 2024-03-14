export const getRecords = () => {
    return fetch("http://localhost:8000/records?_expand=genre&_expand=type&_expand=speed&_expand=condition&_expand=size").then((res) => res.json())
}