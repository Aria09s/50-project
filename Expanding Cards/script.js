function Select(clickedElement) {
    let activeelement = document.getElementsByClassName("active")
    activeelement[0].classList.remove('active')

    clickedElement.classList.add('active')
}