// TODO: Include packages needed for this application
const fs = require('fs');

const inquirer = require('inquirer');
// const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const licenses = [
    {
        name: 'Apache License 2.0',
        badge: 'https://img.shields.io/badge/License-Apache2.0-blue.svg',
    },
    {
        name: 'GNU',
        badge: 'https://img.shields.io/badge/License-GNU-green.svg',
    },
    {
        name: 'MIT License',
        badge: 'https://img.shields.io/badge/License-MIT-yellow.svg',
    },
    {
        name: 'Boost Software License 1.0',
        badge: 'https://img.shields.io/badge/License-Boost_1.0-blue.svg',
    },
    {
        name: 'Eclipse Public License',
        badge: 'https://img.shields.io/badge/License-Eclipse-Public-License-orange.svg'
    },
]
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your application / project?',
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'Why did you build this project and what did you learn?',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for using the app(project).'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators, if any.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose the license for your project:',
        choices: licenses.map((license) => license.name),
    },
    {
        type: 'input',
        name: 'features',
        message: 'List some of the features of your project.',
    },
    {
        type: 'input',
        name: 'contribute',
        message: '',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter a link to your Github profile.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your Emmail address.',
    },
];

inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
    })

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     `# <Your-Project-Title>

//     ## Description
    
//     Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
    
//     - What was your motivation?
//     - Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
//     - What problem does it solve?
//     - What did you learn?
    
//     ## Table of Contents    
     
//     - [Installation](#installation)
//     - [Usage](#usage)
//     - [Credits](#credits)
//     - [License](#license)
    
//     ## Installation
    
       
//     ## Usage
    
       
//     ## Credits
    
      
//     ## License
    
         
//     ## Badges
    
   
//     ## Features


//     ## How to Contribute
    
//     `
// }

// // TODO: Create a function to initialize app
// function init() { }

// // Function call to initialize app
// init();
// module.import = generateMarkdown
// console.log(generateMarkdown(data))