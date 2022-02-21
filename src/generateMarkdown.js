//const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // if (!license) {
  //   license = '';
  // }

  //if there's no license
  if (!license) {
    return '';
  } else if (license == 'GNU AGPLv3') {
    return '<img src="https://img.shields.io/github/license/saraoros/readme-generator?style=flat-square" />';
  } else if (license == 'GNU GPLv3') {
    return '';
  } else if (license == 'GNU LGPLv3') {
    return '';
  } else if (license == 'Mozilla Public License 2.0') {
    return '';
  } else if (license == 'Apache License 2.0') {
    return '';
  } else if (license == 'MIT License') {
    return '';
  } else if (license == 'Boost Software License 1.0') {
    return '';
  } else if (license == 'The Unlicense') {
    return '';
  }
}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {

// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  //add the license copyright & laws in if/ else statements similar to renderLicenseBadge
  if (!license) {
    license = '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
${renderLicenseBadge(data.license)}

  # Description
  - ${data.description}

  # Installation
  - ${data.installation}

  # Technologies Used
  - ${data.languages}


  # Link to Repository
  - <a href="https://github.com/${data.github}">Github Repository</a>

  # Questions
  - ${data.questions}

  # License
  ### ${renderLicenseSection(data.license)}
  
`;
}


module.exports = generateMarkdown;

// **** examples of badge icons:

// ** MIT license: ****
// <img src="https://img.shields.io/github/license/${username}/${repoName}?style=flat-square" />
