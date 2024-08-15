import axios from 'axios'

// axios.get("https://api.chucknorris.io/jokes/random").then(joke => {
//     console.log(joke.data)
// }).catch(err => {
//     console.log(err)
// })

const getJoke = async(url) => {
    try {
        const res = 
            await axios.get(url)
            console.log(res.data)
    } catch (error) {
        console.log(error)
    }
}

getJoke("https://api.chucknorris.io/jokes/random")