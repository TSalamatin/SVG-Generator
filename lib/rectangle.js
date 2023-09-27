const Shape = require(`./shapes`)

class Rectangle extends Shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    render() {
        //Return a string SVG element to paste, this includes the element dimensions, image dimensions, as well as the info being provided from the user
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="73" y="40" width="160" height="160" fill="${this.shapeColor}" /><text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

module.exports = Rectangle