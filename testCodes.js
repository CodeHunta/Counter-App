//Practice 1
let myAge = prompt("What is your age?")
let manDogRatio = 7
let dogAge = myAge * manDogRatio
console.log("You are " + dogAge + " dog years old")

//Practice 2
let lap1 = 34
let lap2 = 33
let lap3 = 36

function myLaps() {
    totalLap = lap1 + lap2 + lap3
    console.log(totalLap)
}

myLaps()

//Practice 3...The DOM (Document Object Model)
//Simply means how you use JS to modify a website

let userAge = prompt("How old are you?")
userAge = userAge/3
console.log(userAge)

//Practice 4
let myName = "Stanley Umez"
let greeting = "Hi my name is "
let myGreeting = greeting + myName
console.log(myGreeting)

//Practice 5: Calculator

let num1 = prompt("What is the first number?")
let num2 = prompt("What is the second number?")

function add() {
    addNumbers = num1 + num2
    console.log(addNumbers)
}

function minus() {
    addNumbers = num1 - num2
    console.log(addNumbers)
}

function divide() {
    addNumbers = num1 / num2
    console.log(addNumbers)
}

function mulitiply() {
    addNumbers = num1 * num2
    console.log(addNumbers)
}