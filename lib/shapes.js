class Triangle {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
  }

  textRender() {
    return `<text text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }
}
class Circle {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
  render() {
    return `<circle cx="25" cy="75" r="20" fill="${this.shapeColor}"/>`;
  }

  textRender() {
    return `<text text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }
}
class Square {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
  render() {
    return `<rect width="100" height="100" fill="${this.shapeColor}"/>`;
  }

  textRender() {
    return `<text text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }
}

module.exports = { Triangle, Circle, Square };
