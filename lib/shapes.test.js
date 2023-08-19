const { Triangle, Circle, Square } = require("./shapes.js");

describe("Shapes", () => {
  describe("triangle", () => {
    it("Should return triangle filled with blue", () => {
      const triangle = new Triangle();
      triangle.shapeColor = "blue";
      const triSVG = '<polygon points="100, 0 0, 182 200, 182" fill="blue" />';
      expect(triangle.render()).toEqual(triSVG);
    });
  });

  describe("circle", () => {
    it("Should return circle filled with red", () => {
      const circle = new Circle();
      circle.shapeColor = "red";
      const cirSVG = '<circle cx="100" cy="100" r="100" fill="red"/>';
      expect(circle.render()).toEqual(cirSVG);
    });
  });

  describe("square", () => {
    it("Should return square filled with green", () => {
      const square = new Square();
      square.shapeColor = "green";
      const squareSVG = '<rect width="200" height="200" fill="green"/>';
      expect(square.render()).toEqual(squareSVG);
    });
  });
});

describe("Text", () => {
  describe("Text", () => {
    it("Should return the text with the letters JAV and in white", () => {
      const triangle = new Triangle();
      triangle.textColor = "white";
      triangle.text = "JAV";
      const correctText =
        '<text x="100" y="150" font-size="80" text-anchor="middle" fill="white">JAV</text>';
      expect(triangle.textRender()).toEqual(correctText);
    });
  });
});
