const dl = 18
const vote = 16

let name = prompt("enter your name:")
let age = prompt("enter your age")

if(age >= dl) {
    console.log(name, ", you can get a driver´s license and vote")
} else if(age >= vote) {
    console.log(name, ", you can´t get a driver´s license, but you can vote")
} else {
    console.log(name, ", you can´t vote")
}