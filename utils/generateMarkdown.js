

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

// function renderLicenseBadge(license) {
//   if (license) {
//     return `![GitHub license](https://img.shields.io/badge/license-blue.svg)`
//   } else {
//     return '';
//   }
//   // const selectedLicense = licenses.find((license) => license.name === license);
//   // return `![License](${selectedLicense.badge})`;
// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//   // Create a link tage in Markdown that simply scrools down to header with the name of the ##License
//   const selectedLicense = licenses.find((license) => license.name === license);
//   return `[${selectedLicense.name}](${selectedLicense.badge})`;
// }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {
//   // Return the license section of markdown
//   return `This application is covered under the ${license}license.`;
// }
// const name = "JD"
// const someString = `hi there, welcome ${name}`
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Features](#features)
  - [Contribute](#contribute)
  - [Github](#github)
  - [Email](#email)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
${data.credits}

  ## License
  

  ## Features
  ${data.features}

  ## Contribute
  ${data.contribute}

  ## Questions
  For any question, please contact me
  - Github: ${data.github}

  - Email: ${data.email}
`;
}

module.exports = generateMarkdown;
