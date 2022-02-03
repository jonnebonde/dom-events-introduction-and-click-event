
const circle = document.querySelector(".circle");


function toggleClass() {
    event.target.classList.toggle("keep-rotating");

    if(event.target.innerHTML === "Spinning...") {
        event.target.innerHTML = "Click me";
    }
    else {
        event.target.innerHTML = "Spinning...";
    }
}

circle.onclick = toggleClass;

/* 
let count = 0;

document.onclick = function() {
    count++;
    console.log("I am the document " + count + " times.");
}

const button = document.querySelector(".btn");


button.onclick = function() {
   /*  console.log(event.target); */

    /* event.target.style.background = "red"; */

   /*  event.target.classList.add("rotate180"); */
    /* event.target.classList.toggle("rotate180"); */

    /* console.log(this) */
/* }; */ 


/* const myObject = {
    name: "Some object",
    someFunction: function() {
        console.log(this.name);
    }
}

myObject.someFunction(); */



// remainder operator - %
// sometimes referred to as the modulus operator 

const remainder = 8 % 3;

console.log(remainder);


const table = document.querySelector("table");

for(let i = 1; i <= 10; i++) {


    let className = "";

    if(i % 2 === 0) {
        className = "highlight";
    }



    table.innerHTML += `<tr class="${className}">
                        <td>${i}</td>
                        <td>Text content</td>
                        </tr>`;
}


