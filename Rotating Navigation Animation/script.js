// //select container
// let container = document.querySelector(".container")

// // select open element 
// let open = document.querySelector('#open')

// // select close element 
// let close = document.querySelector('#close')

// // Assign Event Click open
// open.addEventListener("click", opening)

// // Assign Event Click close
// close.addEventListener("click", closing)

// // Function For Click open
// function opening() {
//     container.classList.add("show-nav")
// }

// // Function For Click close
// function closing() {
//     container.classList.remove("show-nav")
// }


let container = document.querySelector(".container")
let myButton = document.querySelector('.circle')

myButton.addEventListener("click", () => {
    container.classList.toggle("show-nav")
})

