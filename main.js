let outputIncrement = document.getElementById("output")
let outputDecrement = document.getElementById("output")
let outputReset = document.getElementById("output")

let output = 0

function increment() {
    output += 1
    outputIncrement.innerText = output
}

function decrement() {
    output -= 1 
    outputDecrement.innerText = output

    if (output <= 0) {
        output = 0
        outputDecrement.textContent = output
    }
}

function reset() {
    output = 0
    outputReset.innerText = output
}

