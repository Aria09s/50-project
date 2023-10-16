search = document.querySelector('.search')
btn = document.querySelector('.btn')
input = document.querySelector('.input')

btn.addEventListener('click', ariaFunction)


function ariaFunction() {
    search.classList.toggle('active')
    input.focus()
}