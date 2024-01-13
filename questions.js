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
    {
        name: 'Non',
        badge: 'Non'
    }
]


const questions = [

    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your application / project?',
    },
        {
        type: 'input',
        name: 'description',
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
        choices: licenses.map((license) => {
            return {
                name: `${license.name} - ${license.badge}`,
                value: license.name,
            };
        }),
    },
    {
        type: 'input',
        name: 'features',
        message: 'List some of the features of your project.',
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Provide instructions for contributing to this project.',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter a link to your Github profile.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your Email address.',
    },
];

module.exports = questions;