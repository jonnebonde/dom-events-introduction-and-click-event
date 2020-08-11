const circle = document.querySelector(".circle");

function toggleClass() {
    event.target.classList.toggle("keep-rotating");

    if (event.target.innerHTML === "Spinning...") {
        event.target.innerHTML = "Click me";
    } else {
        event.target.innerHTML = "Spinning...";
    }
}

circle.onclick = toggleClass;

// let count = 0;

// document.onclick = function () {
//     count++;
//     console.log("I am the document, clicked " + count + " times.");
// };

// const button = document.querySelector(".btn");

// button.onclick = function () {
//     console.log(event.target);

//     // event.target.style.background = "red";

//     event.target.classList.toggle("rotate180");

//     // console.log(this);
// };

// const myObject = {
//     name: "Some object",
//     someFunction: function () {
//         console.log(this);
//     },
// };

// myObject.someFunction();
