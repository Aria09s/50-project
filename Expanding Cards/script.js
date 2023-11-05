

let mylist = document.querySelectorAll('.panel');
let activeElement = getRandint()
let step = 2;
let delay = 2000  // miliseconds

mylist[activeElement].classList.add('active')

setInterval(autoshow, delay)

function getRandint() {
    let test1 = Math.random();
    let test2 = Math.floor(test1 * 1000) ;
    let test3 = Math.floor(test1 * 1000)% 6;

    console.log(test1);
    console.log(test2);
    console.log(test3);
    return test3
}

function Select(clickedElement) {
    let activeelement = document.querySelector(".active");
    activeelement.classList.remove('active');

    clickedElement.classList.add('active');

    for (let index = 0; index < mylist.length; index++) {
        if (mylist[index] == clickedElement) {
            activeElement = index;
            break;
        }
    }

}

function autoshow() {
    mylist[activeElement].classList.remove('active');


    activeElement += step;

    if (activeElement > mylist.length - 1)
        activeElement -= mylist.length

    mylist[activeElement].classList.add('active');
}
