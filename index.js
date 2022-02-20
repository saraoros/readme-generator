// TODO: Include packages needed for this application
const fs = require('fs');
//const generatePage = require('./src/readme-template.js');
const inquirer = require('inquirer');
const projectDataArgs = process.argv.slice(2);
const { writeFile, copyFile } = require('./src/readme-template');
//const { title } = require('process');







// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the title of your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please provide a description about your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide instructions on how to install your project. (Required)',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please provide Please provide instructions on how to install your project.');
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What languages did you use to build this project? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node', 'Other']
          },
          {
            // this needs to be modified to the name of you github instead
            type: 'input',
            name: 'github',
            message: 'Enter the GitHub link to your project. (Required)',
            validate: linkInput => {
              if (linkInput) {
                return true;
              } else {
                console.log('You need to enter a project GitHub link!');
                return false;
              }
            }
          },
          {
              // should I list all licenses' available or only a few? Most popular?
            type: 'checkbox',
            name: 'license',
            message: 'Choose a license for your application:',
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense' ]
          },
          
    ])
    // the following block is from module 9: needs to be modified
    // .then(projectData => {
    //   portfolioData.projects.push(projectData);
    //   if (projectData.confirmAddProject) {
    //     return promptProject(portfolioData);
    //   } else {
    //     return portfolioData;
    //   }
    // });



};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();




const generatePage = (title, github) => {
  return `
    # ${title}

    # Description
    - ${descriptionInput}

    # Installation
    - ${installInput}

    # Technologies Used
    - ${languages}

    # Link to Repository
    ##<a href="https://github.com/${github}">Github</a>

    # License
    ### ${license}

  `;
};


fs.writeFile('README.md', generatePage(title, github), err => {
  if (err) throw err;

  console.log('README created!');
});





// got this section from portfolio generator, still needs to be modified!
questions()
  .then(titleInput => {
    return generatePage(titleInput);
  })
  .then(readMePage => {
    return writeFile(readMePage);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });


  // ** Questions: ***

 /* WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under */


// How can I add badges to MIT licenses? SHould I make if else statements with them?

// Do I need 3 JS files? Or do I need to make a readme file for the deployed input.

//