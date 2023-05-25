let outputIncrement = document.getElementById("output")
let outputDecrement = document.getElementById("output")
let outputReset = document.getElementById("output")
console.log(outputIncrement);

let output = 0
console.log(output);

function increment() {
    output += 1
    outputIncrement.innerText = output
    console.log(output);
}

function decrement() {
    output -= 1 
    outputDecrement.innerText = output
    console.log(output);
}

function reset() {
    output = 0
    outputReset.innerText = output
    console.log(output);
}
