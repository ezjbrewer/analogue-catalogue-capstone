export const getUserByEmail = (email) => {
  return fetch(`http://localhost:8000/users?email=${email}`).then((res) =>
    res.json()
  )
}

export const createUser = (user) => {
    return fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => res.json())
}

export const getUserById = (userId) => {
  return fetch(`http://localhost:8000/users?id=${userId}`).then((res) =>
    res.json()
  )
}

export const updateUser = (user) => {
  const putOptions = {
      method: "PUT",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(user) 
  }
  return fetch(`http://localhost:8000/users/${user.id}`, putOptions)
}