// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const { normalize } = require("path");
const markdown = require("./utils/generateMarkdown.js");

// selections
const selections = [
  {
    type: "checkbox",
    name: "selections",
    message: "Select the sections you want added to your Readme",
    choices: [
      {
        name: "Header",
      },
      {
        name: "Description",
      },
      {
        name: "Table of Contents",
      },
      {
        name: "Installation Instructions",
      },
      {
        name: "Usage Instructions",
      },
      {
        name: "Credits",
      },
      {
        name: "License",
      },
      {
        name: "Badges",
      },
      {
        name: "Features",
      },
      {
        name: "Contributing",
      },
      {
        name: "Tests",
      },
    ],
  },
];

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of the readme",
  },
  {
    type: "input",
    name: "description",
    message: "enter a description for your readme",
  },

  {
    type: "editor",
    name: "Install",
    message: "Enter any instilation instructions",
  },
  {
    type: "editor",
    name: "Usage",
    message: "Enter any usage instructions",
  },
  {
    type: "input",
    name: "license",
    message: "What Software License are you using?",
    default: "None",
  },
  {
    type: "list",
    name: "tableOfContents",
    message: "Would you like a table of contents?",
    default: "No",
    choices: ["Yes", "No"],
  },
];

inquirer.prompt(selections).then((anwsers) => {
  console.log(anwsers.selections);
  
});

// inquirer.prompt(questions).then((answers) => {
//     let fileName = JSON.stringify(answers.fileName)
//     let m = new markdown(answers)
//     let mark = m.generateMarkdown()
//     console.log(m.print())
//     //writeToFile(fileName, mark)

// })

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(`${JSON.stringify(fileName)}.md`, data, (err) => {
    if (err) throw err;
    console.log("file written");
  });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
