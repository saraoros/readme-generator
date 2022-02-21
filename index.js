// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/generateMarkdown');


// Start of questions for user input
const questions = () => {
console.log(`
========================================
Let's Get Started With a Few Questions:
========================================
`)

    return inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: title => {
                if (title) {
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
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username: (Required)',
            validate: username => {
              if (username) {
                return true;
              } else {
                console.log('You need to enter your GitHub username!');
                return false;
              }
            }
          },
          // {
          //   // I made this question in hopes of capturing the repo name to insert it into the badge img link for the license
          //   type: 'input',
          //   name: 'repo',
          //   message: 'Enter your projects repository name: (Required)',
          //   validate: repoName => {
          //     if (repoName) {
          //       return true;
          //     } else {
          //       console.log('You need to enter your projects repository name!');
          //       return false;
          //     }
          //   }
          // },
          {
            type: 'confirm',
            name: 'confirmLicense',
            message: 'Does your project have a license?',
            default: false
          },     
    ])
    .then(licenseData => {
      //license.push(licenseData);
      console.log(licenseData)
      if (licenseData.confirmLicense) {
        return licenseQuestions();
      } else {
        console.log('No License was added to your README.')
      }
fs.writeFile('./README.md', generatePage(licenseData), err => {
  if (err) throw err;

  console.log('README created!');
});

    });

};


// If user answer 'y' to having a license, licenseQuestions function will be called.
const licenseQuestions = licenseType => {

  // If there's no license array property, create one
  if (!licenseType.license) {
    licenseType.license = [];
  }

  return inquirer
    .prompt([
      {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense' ]
      },
    
    ])
};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();







// got this section from portfolio generator, still needs to be modified!
 questions()
 .then(answers => console.log(answers));
 
  //  .then(title => {
  //    return generatePage(title);
  //  })
  //  .then(readMePage => {
  //   return writeFile(readMePage);
  //  })
  // .then(writeFileResponse => {
  //   console.log(writeFileResponse);
  //   return copyFile();
  // })
  // .then(copyFileResponse => {
  //   console.log(copyFileResponse);
  // })
  // .catch(err => {
  //   console.log(err);
  // });






  // ** Questions: ***

 /* WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under */


// what is the best way to add badges to the licenses? Should I make if/else statements with them?

// Do I need 3 JS files? Or do I need to make a readme file for the deployed input.

//