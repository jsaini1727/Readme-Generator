// TODO: Include packages needed for this application
const fs = require('fs');

const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const questions = require('./questions.js')


// TODO: Create an array of questions for user input


inquirer.prompt(questions)
    .then((answers) => {
        const userAnswers = answers;
    const readmeContent = generateMarkdown(userAnswers);
// // TODO: Create a function to write README file
fs.writeFile('dist/README.md', readmeContent, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('README.md file created successfully!');
});
})
//     

// // TODO: Create a function to initialize app
// function init() { }

// // Function call to initialize app
// init();

// console.log(generateMarkdown(data))