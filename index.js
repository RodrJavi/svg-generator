const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require("./lib/shapes");

const generateSVG = (shape, text) =>
  `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg>"
    ${shape}

    ${text}

    </svg>
  `;

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
      name: "shapeColor",
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
    let chosenShape;
    switch (answers.shape) {
      case "circle":
        console.log("circle!");
        chosenShape = new Circle(
          answers.text,
          answers.textColor,
          answers.shapeColor
        );
        break;
      case "square":
        console.log("square!");
        chosenShape = new Square(
          answers.text,
          answers.textColor,
          answers.shapeColor
        );
        break;
      case "triangle":
        console.log("triangle!");
        chosenShape = new Triangle(
          answers.text,
          answers.textColor,
          answers.shapeColor
        );
        break;
    }
    // console.log(generateSVG(chosenShape.render(), chosenShape.textRender()));
    console.log(chosenShape.render());
    console.log(chosenShape.textRender());
    const shape = chosenShape.render();
    const text = chosenShape.textRender();
    const completedSvg = generateSVG(shape, text);
    // console.log(completedSvg);
    fs.writeFile("examplesvg.svg", completedSvg, (err) => {
      err ? console.log(err) : console.log("successfully created svg!");
    });
  });
