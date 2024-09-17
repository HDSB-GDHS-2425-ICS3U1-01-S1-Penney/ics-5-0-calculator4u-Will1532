// Name: William Cook
// Date: September 16th 2024
// Title: Calc App (Calc is short for calculator)
// Extra Instructions Done: Error Handling, Unit Conversion


// Variables and prompts

const num1 = prompt("What is the value of your first number?");

const num2 = prompt("What is the value of your second number?");

// Checking to see if X and Y are Numbers

if (isNaN(num1)) {
    console.log("Error! Make sure your numbers are actual numbers.")
} 
if (isNaN(num2)) {
    console.log("Error! Make sure your numbers are actual numbers.")
} else {

// If it detects that X or Y are not numbers, it doesn't run any of this

let Sign = prompt("What sign do you want to use? + for addition, - for substraction, * for multiplication, and / for division");

// The code that makes the calculator run
// An if statement to make it so that whatever sign the user picks, it calculates that
// And an else statement that makes it so that is the user picks a sign that doesn't exist, it gives them a notice.

if (Sign == "+") { 
    console.log(Number(num1) + Number(num2))
}   
else if (Sign == "-") {
    console.log(Number(num1) - Number(num2))
}
else if (Sign == "*") {
    console.log(Number(num1) * Number(num2))
}
else if (Sign == "/") {
    if (Number(num2) == 0)
    console.log("Error! Cannot divide by 0!") 
    else {
    console.log(Number(num1) / Number(num2)) }
} 
else {
    console.log("Error! Pick an accurate sign.")
} }

// Unit Conversion

// The unit that the user will be changing

const num3 = prompt("What do you want your third number to equal?")

//Checking to see if Unit is a number

if (isNaN(num3)) {
    console.log("Error! Pick a valid number")
} else {

// The unit they will be using

const unit = prompt("What unit would you like to use? Pick between Celsius, Farenheight, Inches or Centimeters.")

// This can change Celsius to Farenheight and Centimeters to Inches (and vice versa)

if (unit == "Celsius") {
    console.log(Number(num3) * Number(1.8) + Number(32))
}
else if (unit == "Farenheight") {
    console.log(Number(num3) - Number(32) * Number(0.5555555556))
}
else if (unit == "Inches") {
    console.log(Number(num38) * Number(2.54))
}
else if (unit == "Centimeters") {
    console.log(Number(num3) / Number(2.54))
} 
else {
    console.log("Error! Pick between the four options.")
} }