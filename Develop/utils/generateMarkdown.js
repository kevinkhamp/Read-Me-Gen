// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
  return `![Github license](https://img.shields.io/badge/license-${license}-yellowgreen.svg`
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `\n* [License](#license)\n`
  }
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `## License
    
    Licensed under the ${license} license`
  }
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Table of Contents
* [Description](#description)
* [Usage] (#usage)
* [Installation] (#installation)
* [Contribution] (#contribution)
* [Tests] (#tests)
* [Questions] (#questions)
${renderLicenseLink(data.license)}
## Description
${data.description}
## Usage
${data.usage}
## Installation
${data.installation}
## Contribution
${data.contribution}
## Tests
\'\'\'
${data.tests}
\'\'\'
## Questions
${data.email}
${data.github}
${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
