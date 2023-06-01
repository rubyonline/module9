// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
    },

    {
        type: "input",
        name: "description",
        message: "Describe your project here:",
    },

    {
        type: "input",
        name: "installation",
        message: "How can the user install this project?",
    },

    {
        type: "input",
        name: "usage",
        message: "How can the user use this project?",
    },

    {
        type: "Checkbox",
        name: "lisence",
        message: "What liscence does this project use?",
        choices: ['MIT', 'Other'],
    },

    {
        type: "input",
        name: "contributing",
        message: "Who worked on this project?",
    },

    {
        type: "input",
        name: "test",
        message: "How can the user test this project?",
    },

    {
        type: "input",
        name: "questions",
        message: "What is your github username?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync();
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        console.log();
        writeToFile();
}

// Function call to initialize app
init();
