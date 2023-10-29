let insert = document.getElementById('insert')

window.addEventListener('keydown'), (event) => {
    insert.innerHTML = `
    ${event.key === ' ' ? " " : event.key} 
    ${event.keyCode}
    ${event.code}} `
}