let colorVariable = false;
let userInput = 16;
const button = document.querySelector("button");
const colormode = document.querySelector("#coloringmode");
const container = document.querySelector("#container");


button.addEventListener("click", () => {
    userInput = prompt("What is the size of the grid you want? ");

    container.querySelectorAll(".columnContainer").forEach((h)=>{
        h.remove();
    })

    createGrid(userInput);
});

colormode.addEventListener("click", () => {
    colorVariable = !colorVariable;

    container.querySelectorAll(".columnContainer").forEach((h)=>{
        h.remove();
    })

    createGrid(userInput);
})



let square = document.createElement("div");

function createGrid(userInput){
    for (let i=0; i<userInput; i++){
        let newDiv = document.createElement("div");
        newDiv.classList.add("columnContainer");
        container.appendChild(newDiv);
        for (let i=0; i<userInput; i++){
            let square = document.createElement("div");
            square.style.padding = `${16/userInput * 16}px`;
            // square.style.borderWidth = `${16/userInput * 2}px`;
            // square.style.borderColor = "black";
            // square.style.borderStyle = "solid";
            square.style.outline = `${16/userInput * 2}px solid black `
            square.style.transition = "outline 0.2s ease"
            square.classList.add("square");
            newDiv.appendChild(square);
        }
    }


    container.querySelectorAll(".square").forEach((h) => {
        h.addEventListener("mouseenter", () => {
            h.style.backgroundColor = getRandomColor();
        });
    })

    if (colorVariable == false){
        container.querySelectorAll(".square").forEach((h) => {
            let a =0;
            h.addEventListener("mouseleave", () => {
                a += 0.1;
                h.style.backgroundColor = `rgba(0,0,0,${a})`;
            });
        })
    }

}


function getRandomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    const color = `${r},${g},${b}`;

    return `rgb(${color})`;
}





createGrid(16);