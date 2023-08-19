const { Triangle, Circle } = require("./shapes.js");

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
});
