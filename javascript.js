
let defaultSizeValue = 16;
let currentUserInput = 16;

let changeSizeButton = document.querySelector(".specifySize")
let resetButton = document.querySelector(".resetButton")

let mainGridContainer = document.querySelector(".mainGridContainer")

let createGrid = function(size) {
    for (i = 0; i < size; i++) {
        let newRow = document.createElement("div")
        newRow.style.display = "flex"
        newRow.style.justifyContent = "space-evenly"
        newRow.style.alignItems = "stretch"
        newRow.style.flex = "1 1 auto"
        newRow.style.margin = "0"
        newRow.style.padding = "0"
        newRow.style.gap = "0.25%"
        for (s = 0; s < size; s++) {
            let newRowBox = document.createElement("div")
            newRowBox.style.flex = "1 1 auto"
            newRowBox.style.backgroundColor = "lightgrey"
            newRowBox.addEventListener("mouseenter", function(e) {
                if (e.target.style.backgroundColor === "lightgrey") {
                    e.target.style.backgroundColor = "black"
                } else if (e.target.style.backgroundColor === "black") {
                    e.target.style.backgroundColor = "lightgrey"
                }
            })
            newRow.appendChild(newRowBox)
        }
        mainGridContainer.appendChild(newRow)
    }
}

createGrid(defaultSizeValue)

let promptUser = function() {
    let input = prompt("Enter an integer between 1 and 100", defaultSizeValue.toString())
    return input
}

let userInput = function() {
    let inputValue = promptUser()
    if (inputValue === null) {
    } else if (typeof parseInt(inputValue) !== "number" || (parseInt(inputValue) < 1) || (parseInt(inputValue) > 100) || (parseInt(inputValue).toString() === "NaN")) {
        alert("Invalid input!")
        userInput()
    } else {
        while (mainGridContainer.firstChild) {
            mainGridContainer.removeChild(mainGridContainer.lastChild)
        }
        currentUserInput = parseInt(inputValue);
        createGrid(parseInt(inputValue))
    }
};

changeSizeButton.addEventListener("click", function() {
    userInput()
})

resetButton.addEventListener("click", function() {
    while (mainGridContainer.firstChild) {
        mainGridContainer.removeChild(mainGridContainer.lastChild)
    }
    createGrid(currentUserInput)
})




