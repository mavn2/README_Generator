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
  .then(function(response){
    writeRM(response)
  });
//Add function to check for complete inputs

//Writes information from response to readme
function writeRM(response){
  fs.writeFile('README.md', 
  `## ${response.title}

   ## Description
   ${response.desc}
   
   ## Installation
   ${response.install}

   ## Useage
   ${response.install}
   `, 
  
  err => {
    if(err){
      console.log('Problem!');
    }
  });
};