//Dependencies
const inquirer = require("inquirer") 
const fs = require("fs")

//Array of questions presented to user through inquirer
inquirer
  .prompt([
    {
      type: "input",
      message: "Name Your Project!",
      name: "title"
    },
    {
      type: "input",
      message: "Describe It!",
      name: "desc"
    },
    {
      type: "input",
      message: "Instructions For Installation!",
      name: "install"
    },
    {
      type: "input",
      message: "Instructions For Use!",
      name: "use"
    },
    {
      type: "input",
      message: "Guidelines For Contribution!",
      name: "contrib"
    },
    {
      type: "input",
      message: "Instructions For Testing!",
      name: "test"
    },
    {
      type: "list",
      message: "Select Your License!",
      name: "license",
      choices: [
        "MIT",
        "GNU GPLv3",
        "Mozilla Public License 2.0"
      ],
      default: "MIT"
    },
    {
      type: "input",
      message: "Enter Your Github!",
      name: "git"
    },
    {
      type: "input",
      message: "Enter Your Email!",
      name: "email"
    },
  ])
  .then(async function(response, text){
    text = await createRM(response)
    writeRM(text);
  });
//Function to create template literal as var:
function createRM(response){
 const text = `## ${response.title}
## Description
${response.desc}

## Installation
${response.install}

## Usage
${response.use}

## License
Use of this application is goverened by the ${response.license} license.

## Contributing
${response.contrib}

## Tests
${response.test}

## Questions
If you have any further questions, you can contact me at ${response.email}. If you'd like to connect with me on GitHub, my user profile is [${response.git}](${response.git}`

  return text;
}
//Writing README text in variable, to work around/without indentation-lighter weight than installing npm package to do remove indents in text, as considered-use fn? to create

//Writes information from response to readme
function writeRM(text){

  fs.writeFile('README.md', text, err => {if(err) {console.log('Error creating Readme!')}})
  //fs.appendFile('README.md', '## Description /n/', err => {if(err) {console.log('Error creating Readme!')}})
 // fs.appendFile('README.md', `${response.desc}
  //`,err => {if(err) {console.log('Error creating Readme!')}})
};

