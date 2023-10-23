let left = document.querySelector('.left');
let right = document.querySelector('.right');
let container = document.querySelector('.container');

left.addEventListener('mouseover', () => {
    container.classList.remove('hover-right');

    container.classList.add('hover-left');
})

right.addEventListener('mouseover', () => {
    container.classList.remove('hover-left');

    container.classList.add('hover-right');

})
