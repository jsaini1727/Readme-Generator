

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license !== 'Non') {
    return ` ![Github license](https://img.shields.io/badge/license-${license.replace(/ /g, '%20')}-blue.svg)`;
  }
  return '';

}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'Non') {
    return `- [License](#license)`
  }

  return ``;
}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
function renderLicenseSection(license) {
  // Return the license section of markdown
  if (license !== 'Non') {
    return `

  ## License

  This application is covered under the ${license}. `
  }
  return '';
}
// const name = "JD"
// const someString = `hi there, welcome ${name}`
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  ${renderLicenseLink(data.license)}
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

  ${renderLicenseSection(data.license)}
  

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
