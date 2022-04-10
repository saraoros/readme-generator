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
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node.js', 'Express.js', 'mySQL', 'Sequelize',  'Other']
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
          {
            type: 'input',
            name: 'questions',
            message: 'Please enter your email address: (Required)',
            validate: email => {
              if (email) {
                return true;
              } else {
                console.log('You need to enter an email address!');
                return false;
              }
            }
          },
          {
            type: 'checkbox',
            name: 'license',
            message: 'Choose a license for your application:',
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense' ]
          }, 
    ])
    .then(licenseData => {
      console.log(licenseData)
fs.writeFile('./dist/README.md', generatePage(licenseData), err => {
  if (err) throw err;

  console.log('====== Your README has been created!======');
});
    });

};



 questions()
 .then(answers => console.log(answers));
 