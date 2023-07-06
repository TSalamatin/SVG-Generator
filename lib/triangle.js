const shape= require(`./shapes`)

//Get the variables from parent class
class Triangle extends shape {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    render() {
        //Return a string SVG element to paste, this includes the element dimensions, image dimensions, as well as the info being provided from the user
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />
        <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
}

module.exports =  Triangle