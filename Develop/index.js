// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('../Develop/utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {type: 'input', message: 'What is the title of this README?', name: 'title'},
    {type: 'input', message: 'What is the description of this README?', name: 'description'},
    {type: 'input', message: 'What is the table of contents of this README?', name: 'table'},
    {type: 'input', message: 'What is the installation?', name: 'installation'},
    {type: 'input', message: 'What was used?', name: 'usage'},
    {type: 'checkbox', message: 'What is the license?', name: 'license', choices: ['MIT', 'APACHE2.0', 'Boost1.0', 'BSD2', 'BSD3', 'NONE']},
    {type: 'input', message: 'Who are you contributing?', name: 'contribution'},
    {type: 'input', message: 'How do I test this?', name: 'tests'},
    {type: 'input', message: 'What is your email?', name: 'email'},
    {type: 'input', message: 'What is your GitHub username?',name: 'github'},
];

// TODO: Create a function to write README file
function writeToFile(filename, data) {
    return fs.writeFileSync('../Develop/', filename, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log('Creating README.md...')
        writeToFile('../Develop/README.md', generateMarkdown({...responses}))
    })
}

// Function call to initialize app
init();
