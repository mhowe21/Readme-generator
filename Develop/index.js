// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const markdown = require("./utils/generateMarkdown.js");

// selections

const questions = [
  {
    type: "input",
    name: "Title",
    message: "What is the title of the readme (required)",
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
    name: "Description",
    message: "enter a description for your readme (required)",
    validate: function (value) {
      if (value) {
        return true;
      } else {
        return "please enter a description.";
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
    name: "Github",
    message: "Enter a link to your github",
  },
  {
    type: "list",
    name: "TOC",
    message: "Would you like a table of contents?",
    choices: ["Yes", "No"],
  },
];

inquirer.prompt(questions).then((answers) => {
  let m = new markdown(answers);
  m.renderBody();
  m.renderLicenseLink();
  m.renderLicenseBadge();
  m.renderQuestion();
  m.renderTOC();
  let mark = m.generateMarkdown();
  writeFile("Readme.md", mark);
});

// TODO: Create a function to write README file
function writeFile(fileName, data) {
  fs.writeFile(`${fileName}`, data, (err) => {
    if (err) throw err;
    console.log("file written");
  });
}
