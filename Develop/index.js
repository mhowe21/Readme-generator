// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const { normalize } = require("path");
const markdown = require("./utils/generateMarkdown.js");

// selections

const questions = [
  {
    type: "input",
    name: "Title",
    message: "What is the title of the readme",
    validate: function (value) {
      if (value) {
        return true;
      } else {
        return "please enter a title";
      }
    },
  },
  {
    type: "input",
    name: "Disc",
    message: "enter a description for your readme",
    validate: function (value) {
      if (value) {
        return true;
      } else {
        return "please enter a discription.";
      }
    },
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

    choices: ["MIT", "GNU", "Apache", "BSD", "Other", "None"],
  },
  {
    type: "input",
    name: "Email",
    message: "what is your email?",
  },
  {
    type: "input",
    name: "github",
    message: "Enter a link to your github"
  },
  {
    type: "list",
    name: "TOC",
    message: "Would you like a table of contents?",
    options: ["Yes","No"]

  }
];

inquirer.prompt(questions).then((answers) => {
  let m = new markdown(answers);
  m.renderBody();
  m.renderLicenseLink();
  m.renderLicenseBadge();
  
  let mark = m.generateMarkdown();
  console.log(m.print());
  writeToFile("testReadme", mark);
});

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
