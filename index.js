const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require("./lib/shapes");

// const generateSVG = (({}))

inquirer
  .prompt([
    {
      type: "list",
      name: "shape",
      message: "What shape will the svg be?",
      choices: ["circle", "square", "triangle"],
    },
    {
      type: "input",
      name: "color",
      message:
        "What color will the shape be? Enter either regular color name or hexidecimal.",
    },
    {
      type: "input",
      name: "text",
      message: "Enter up to 3 characters for the text",
    },
    {
      type: "input",
      name: "textColor",
      message:
        "What color for the text? Enter either regular color name or hexidecimal.",
    },
  ])
  .then((answers) => {
    console.log(answers);
  });
