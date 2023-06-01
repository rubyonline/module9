const generateMarkdown = require('../index');
let coolBadge = "Insert Badge Info Here"
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(questions.license = 'MIT'){
    coolBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else {
    coolBadge = ""
  }

};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(questions) {
  return `# ${questions.title}
  ## Description
  ${questions.description}
  
  ## Table of Contents
  
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Lisence](#Lisence)
  - [Contributing](#Contributing)
  - [Test](#Test)
  - [Questions](#Questions)
  
  ## Installation
  ${questions.installation}

  ## Usage
  ${questions.Usage}

  ## Lisence

  ${coolBadge}

  ## Contributing
  ${questions.contributing}
  
  ## Test
  ${questions.Usage}
  
  ## Questions
  https://github.com/  ${data.questions}
`;
}

module.exports = generateMarkdown;
