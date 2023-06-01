const indexMarkdown = require('../index');
let coolBadge = "Insert Badge Info Here"
let printHere = "Placeholder text"
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    coolBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else {
    coolBadge = '';
  }
};

renderLicenseBadge();
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {
//
//}
//THIS HAS BEEN COMMENTED OUT AS I HAVE TAKEN CARE OF IT IN THE LAST CHUNK OF CODE

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === 'MIT'){
    printHere = "This project uses the MIT license."
  } else {
    printHere = ''
  }
};

renderLicenseSection();

// TODO: Create a function to generate markdown for README
function generateMarkdown(questions) {
  return `# ${questions.title}
  ## Description
  ${questions.description}
  
  ## Table of Contents
  
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Test](#Test)
  - [Questions](#Questions)
  
  ## Installation
  ${questions.installation}

  ## Usage
  ${questions.usage}

  ## License
  ${questions.license}
  ${printHere}
  ${coolBadge}

  ## Contributing
  ${questions.contributing}
  
  ## Test
  ${questions.test}
  
  ## Questions
  https://github.com/${questions.questions}
`;
}

module.exports = generateMarkdown;
