// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const markdown = require("./utils/generateMarkdown.js");

const questions = [
    {
        type: "input",
        name: "fileName",
        message: "Enter redme file name"
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of the readme"

    }
]



inquirer.prompt(questions).then((answers) => {
    let fileName = JSON.stringify(answers.fileName)
    let m = new markdown(answers)
    let mark = m.generateMarkdown()
    writeToFile(fileName,mark)
    
    
})


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`,data, (err) => {
        if(err) throw err;
        console.log("file written")
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
