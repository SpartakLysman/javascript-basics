const greetUser = (username, callback) => {
    if (callback) {
        console.log(callback(username))
    } else {
        console.log(username)
    }
}

const cd = username => {
    return "Hello + username"
}

greetUser("james", (u) => {
    return "Hello " + u
})
