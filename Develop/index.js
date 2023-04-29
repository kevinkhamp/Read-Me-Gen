const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('../Develop/utils/generateMarkdown')

const questions = [
    {type: 'input', message: 'What is the title of this README?', name: 'title'},
    {type: 'input', message: 'What is the description of this README?', name: 'description'},
    {type: 'input', message: 'How to install?', name: 'installation'},
    {type: 'input', message: 'What was used?', name: 'usage'},
    {type: 'checkbox', message: 'What is the license?', name: 'license', choices: ['MIT', 'APACHE2.0', 'GPL', 'BSD', 'NONE']},
    {type: 'input', message: 'Who are you contributing?', name: 'contribution'},
    {type: 'input', message: 'How do I test this?', name: 'tests'},
    {type: 'input', message: 'What is your email?', name: 'email'},
    {type: 'input', message: 'What is your GitHub username?',name: 'github'},
];

function writeToFile(filename, data) {
    return fs.writeFile(filename, data, (err) =>
    err ? console.log(err) : console.log('Writing file.'))
}

function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log('Creating README.md...')
        writeToFile('README.md', JSON.stringify(generateMarkdown({...responses}),null), (err) =>
        err ? console.error(err) : console.log(''))
    })
}

// Function call to initialize app
init();
