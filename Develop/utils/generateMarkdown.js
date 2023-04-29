
function renderLicenseBadge(license) {
  if (license !== 'NONE') {
  return `![Github license](https://img.shields.io/badge/license-${license}-yellowgreen.svg`;
  }
  return '';
}


function renderLicenseLink(license) {
  if (license !== 'NONE') {
    return `\n* [License](#license)\n`;
  }
  return '';
}


function renderLicenseSection(license) {
  if (license !== 'NONE') {
    return `## License
    
    Licensed under the ${license} license`;
  }
  return '';
}


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
github.com/${data.github}
${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
