let index = 1

let prev = document.querySelector("#prev");
let next = document.querySelector("#next");
let circles = document.getElementsByClassName('circle');
let progress = document.querySelector(".progress");

prev.addEventListener('click', () => {
    index = index - 1;
    updateUi();
});

next.addEventListener('click', () => {
    index = index + 1;
    updateUi();
});


function updateUi() {
    for (let i = 0; i < circles.length; i++) {
        if (i < index)
            circles[i].classList.add('active');
        else
            circles[i].classList.remove('active');
    }

    prev.disabled = index > 1 ? false : true;
    next.disabled = index < 4 ? false : true;

    progress.style.width = ((index - 1) / (circles.length - 1)) * 100 + "%"

};

