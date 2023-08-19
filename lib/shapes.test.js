const { Triangle, Circle, Square } = require("./shapes.js");

describe("Shapes", () => {
  describe("triangle", () => {
    it("Should return triangle filled with blue", () => {
      const triangle = new Triangle();
      triangle.shapeColor = "blue";
      const triSVG =
        '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
      expect(triangle.render()).toEqual(triSVG);
    });
  });

  describe("circle", () => {
    it("Should return circle filled with red", () => {
      const circle = new Circle();
      circle.shapeColor = "red";
      const cirSVG = '<circle cx="25" cy="75" r="20" fill="red"/>';
      expect(circle.render()).toEqual(cirSVG);
    });
  });

  describe("square", () => {
    it("Should return square filled with green", () => {
      const square = new Square();
      square.shapeColor = "green";
      const squareSVG = '<rect width="100" height="100" fill="green"/>';
      expect(square.render()).toEqual(squareSVG);
    });
  });
});
