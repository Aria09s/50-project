let joke = document.getElementById('joke')
let jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', makeJoke)

makeJoke()

async function makeJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    }

    let res = await fetch('https://icanhazdadjoke.com', config)
    const data = await res.json()
    joke.innerHTML = data.joke
}