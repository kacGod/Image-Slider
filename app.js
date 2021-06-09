const images = [
    "img 1.jpg",
    "img 2.jpg",
    "img 3.jpg"
];

// 1. What is a const variable?
// const variables are block scoped, sane as variables defined with let keyword
// const variables also cannot be overwritten or reassigned
// but the variables defined with const can be mutated, so you can use push() to add to array

let imageElement = document.getElementById("imgs");
let buttons = document.querySelectorAll("button");
let counter = 0;

// 2. What is the querySelectorAll method?
// This method returns a static non-live node list of the specified elements
// the list represents the documents elements

buttons.forEach(function (button) {
    button.addEventListener("click", function () {

        if (button.classList.contains("nextBtn")) {
            counter += 1;
            if (counter > images.length - 1) {
                counter = 0;
            }
        }
        else if (button.classList.contains("prevBtn")) {
            counter -= 1;
            if (counter < 0) {
                counter = 2;
            }
        }

        imageElement.style.backgroundImage = "url('imgs/" + images[counter] + "')";
    })
})

// 3. What is forEach method?
// forEach is a new addition to javascirpt and acts like a loop
// it takes 3 arguments, item, index and the array
// the functions contents executes for each element in the array


// 4.What is classList?
// classList is a read only property that returns DOMTokenList collection of
// the class attributes of the element, DOMTokenList is case sensetive
// an element with no class attributes will return an empty DOMTokeList
// with the length property of 0, the list is read only
// although you cann add or remove classes, with the add() and remove() method
