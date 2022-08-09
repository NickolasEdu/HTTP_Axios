const url = "http://localhost:5500/api"

function getUsers() {
    axios.get(url)
    .then(res => {
        apiResult.textContent = JSON.stringify(res.data)
    })
    .catch(err => console.error(err))
}

function addNewUser() {
    axios.post(url, {
        name: "Zagreus",
        city: "Campinas",
        avatar: "https://picsum.photos/200/300"
    })
    .then(res => console.log(res))
    .catch(err => console.error(err))
}

function updateUser(id, ) {
    axios.put(`${url}/${id}`, {
        name: "Alex",
        city: "Vasco",
        avatar: "https://picsum.photos/200/300"
    })
    .then(res => console.log(res))
    .catch(e => console.error(e))
}

function deleteUser(id) {
    axios.delete(`${url}/${id}`)
    .then(res => console.log(res))
    .catch(e => console.err(e))
}

getUsers()
addNewUser()
updateUser(3)
deleteUser(7)