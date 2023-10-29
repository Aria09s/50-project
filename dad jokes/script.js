let joke = document.getElementById('joke')
let jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', makeJoke)

makeJoke()

function makeJoke() {
    const config = {
        headers: {
            Accept: 'event',
        },
    }

    let res = fetch('https://icanhazdadjoke.com', config)
}