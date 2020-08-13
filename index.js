//Dependencies
var inquirer = require ("inquirer") 
var fs = require ("fs")

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
      name: "des"
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
  })

  function writeRM(response){
    console.log(response.title)
  }