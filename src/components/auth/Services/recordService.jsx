export const getRecords = () => {
    return fetch("http://localhost:8000/records?_expand=genre&_expand=type&_expand=speed&_expand=condition&_expand=size").then((res) => res.json())
}

export const addRecord = (record) => {

    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(record) 
    }
    return fetch("http://localhost:8000/records", postOptions)
}

export const getRecordById = (recordId) => {
    return fetch(`http://localhost:8000/records/${recordId}`).then((res) => res.json())
}

export const updateRecord = (record) => {
    const putOptions = {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(record) 
    }
    return fetch(`http://localhost:8000/records/${record.id}`, putOptions)
}

export const deleteRecord = (recordId) => {
    return fetch(`http://localhost:8000/records/${recordId}`, {
        method: "DELETE"
    })
}