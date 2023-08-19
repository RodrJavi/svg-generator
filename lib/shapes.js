class Triangle {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
  render() {
    return `<polygon points="100, 0 0, 182 200, 182" fill="${this.shapeColor}" />`;
  }

  textRender() {
    return `<text x='100' y='150' font-size="80" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }
}
class Circle {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
  render() {
    return `<circle cx="100" cy="100" r="100" fill="${this.shapeColor}"/>`;
  }

  textRender() {
    return `<text x='100' y='110' font-size="80" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }
}
class Square {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
  render() {
    return `<rect width="200" height="200" fill="${this.shapeColor}"/>`;
  }

  textRender() {
    return `<text x='100' y='110' font-size="80" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
  }
}

module.exports = { Triangle, Circle, Square };
