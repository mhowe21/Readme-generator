// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const { normalize } = require("path");
const markdown = require("./utils/generateMarkdown.js");

// selections


const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of the readme",
  },
  {
    type: "input",
    name: "Disc",
    message: "enter a description for your readme",
  },

  {
    type: "input",
    name: "Install",
    message: "Enter any Installation instructions",
  },
  {
    type: "input",
    name: "Usage",
    message: "Enter any usage instructions",
  },
  {
    type: "input",
    name: "Credits",
    message: "Enter Any credits",
  },
  {
      type: "list",
      name: "License",
      message: "What License type",
      default: "None",

      choices: 
      [
          "MIT",
          "GNU",
          "Apache",
          "BSD",
          "Other",
          "None"
      ]
  }
];



inquirer.prompt(questions).then((answers) => {
    
    let m = new markdown(answers);
    m.renderLicenseLink();
    m.renderLicenseBadge();
    let mark = m.generateMarkdown();
    console.log(m.print());
    writeToFile("testReadme", mark);

})

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
