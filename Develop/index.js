// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown.js");

const questions = [
    {
        type: "input",
        name: "readmeName",
        message: "What is the name of the readme"

    }
]



inquirer.prompt(questions).then((answers) => {
    //console.log(getData(answers))
    let m = new markdown(answers)
    console.log(m.print())
})


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
