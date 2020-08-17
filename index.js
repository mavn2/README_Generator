//Dependencies
const inquirer = require('inquirer') 
const fs = require('fs')

//Array of questions presented to user through inquirer
inquirer
  .prompt([
    {
      type: 'input',
      message: 'Name Your Project!',
      name: 'title',
      default: 'Untitled Project'
    },
    {
      type: 'input',
      message: 'Describe It!',
      name: 'desc',
      default: 'Experience is subjective.'
    },
    {
      type: 'input',
      message: 'Instructions For Installation!',
      name: 'install',
      default: 'Just run the file(s).'
    },
    {
      type: 'input',
      message: 'Instructions For Use!',
      name: 'use',
      default: `It's self explanatory.`
    },
    {
      type: 'input',
      message: 'Guidelines For Contribution!',
      name: 'contrib',
      default: 'I walk alone.'
    },
    {
      type: 'input',
      message: 'Instructions For Testing!',
      name: 'test',
      default: 'Just try and break it.'
    },
    {
      type: 'list',
      message: 'Select Your License!',
      name: 'license',
      choices: [
        'MIT',
        'GNU GPLv3',
        'Mozilla Public License 2.0'
      ],
      default: 'MIT'
    },
    {
      type: 'input',
      message: 'Enter Your Github!',
      name: 'git',
      default: 'github.com'
    },
    {
      type: 'input',
      message: 'Enter Your Email!',
      name: 'email',
      default: 'redacted'
    },
  ])
  .then(async function(response, text, badge){
    console.log('README complete!')
    getBadge(response)
    badge = await getBadge(response)
    text = await createRM(response, badge)
    writeRM(text);
  });

//Writes information from response to readme
function writeRM(text){
  fs.writeFile('README.md', text, err => {if(err) {console.log('Error creating Readme!')}})
};

//Gets badge link for relevant license
function getBadge(response){
  let lic = response.license
  switch (lic){
    case 'MIT':
      badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
      break;
    case 'GNU GPLv3':
      badge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
      break;
    case 'Mozilla Public License 2.0':
      badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
  }
  return badge;
}

//Function to create template literal as var:
function createRM(response, badge){
  //Indents ommited in following lines to preserve formatting
  const text = `# ${response.title} ${badge}

## Description

${response.desc}

## Installation

${response.install}

## Usage

${response.use}

## License

Use of this application is governed by the ${response.license} license.

## Contributing

${response.contrib}

## Tests

${response.test}

## Questions

If you have any further questions, you can contact me at ${response.email}. If you'd like to connect with me on GitHub, my user profile is [${response.git}](${response.git}).
`
  return text;
}


