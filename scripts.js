const button = document.querySelector("button");
const container = document.querySelector("#container");
let userInput =16;

button.addEventListener("click", () => {
    userInput = prompt("What is the size of the grid you want? ");

    container.querySelectorAll(".columnContainer").forEach((h)=>{
        h.remove();
    })

    createGrid(userInput);
});



let square = document.createElement("div");

function createGrid(userInput){
    for (let i=0; i<userInput; i++){
        let newDiv = document.createElement("div");
        newDiv.classList.add("columnContainer");
        container.appendChild(newDiv);
        for (let i=0; i<userInput; i++){
            let square = document.createElement("div");
            square.style.padding = `${16/userInput * 16}px`;
            square.style.borderWidth = `${16/userInput * 2}px`;
            square.style.borderColor = "black";
            square.style.borderStyle = "solid";
            square.classList.add("square");
            newDiv.appendChild(square);
        }
    }

}

createGrid(16);

