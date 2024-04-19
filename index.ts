#! /usr/bin/env node

import inquirer from "inquirer";

// printing a wellcome message
console.log("\n\twellcome to \'sheikhnatashaarif\' -cli simple calculator\n");

// asking questions from users through inquirer

let answers = await inquirer.prompt([
    {message: "enter first number",type: "number",name: "firstnumber"},
    {message: "enter second number",type: "number",name: "secondnumber"},
    {

        message: "select one operator to perform operations",
        type: "list",
        name: "operator",
        choices: ["addition","subtraction","multiplication","division"],
},
]);
console.log(answers);

// conditional statements if-else

if(answers.operator === "addition"){
    console.log(answers.firstnumber + answers.secondnumber)
}
else if (answers.operator === "subtraction"){
    console.log(answers.firstnumber - answers.secondnumber)
}
else if (answers.operators === "multiplication"){
    console.log(answers.firstnumber * answers.secondnumber)
}
else if (answers.operator === "division"){
    console.log(answers.firstnumber / answers.secondnumber)
}
else{
    console.log("invalid input")
}