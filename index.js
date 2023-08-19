const inquirer = require("inquirer");
const fs = require("fs");

// const generateSVG = (({}))

inquirer
  .prompt([
    {
      type: "input",
      name: "test",
      message: "Is this working right?",
    },
  ])
  .then((answers) => {
    console.log(answers);
  });
