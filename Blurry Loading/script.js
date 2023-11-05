const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0
let delay = 30;
let int = setInterval(blurring, delay)

function blurring() {
    load++

    // if (load > 10 && load < 35) {
    //     delay = 30
    //     clearInterval(int)
    //     int = setInterval(blurring, delay);

    // }
    // else if (load > 35) {
    //     delay = 500
    //     clearInterval(int)
    //     int = setInterval(blurring, delay);

    // }

    if (load > 99) {
        clearInterval(int)
    }

    loadText.innerText = `${load}%`
    loadText.style.opacity = 1 -  (load / 100);
    bg.style.filter = `blur(${(100 - load) * 30 / 100}px)`
}


// let nafbdfbdxfvbme = "aria"
// `salam ${nafbdfbdxfvbme} aziz`
