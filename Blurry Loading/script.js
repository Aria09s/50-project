let bg = document.querySelector('.bg')
let loadText = document.querySelector('.loading-text')

let load = 0

function blurring() {
    load++

    if (load > 99) {
        clearInterval(int)
    }
}