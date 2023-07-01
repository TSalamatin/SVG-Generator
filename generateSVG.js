const fs = require('fs');



const generateSVG = (answers) => {

    // File starts as an empty string
    let svgString = '';
    // Sets width and height of the svg
    svgString =
        '<svg version="1.1" width="300" height="200" >';

    //See which shape was chosen and adds the dimensions and color
    if (answers.shape === 'Circle') {

        svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeColor}"/>`

    } else if (answers.shape === 'Triangle') {
        //Gotta say, polygon points arent fun
        svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}"/>`

    } else if (answers.shape === 'Square') {
        svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeColor}"/>`
    }
    //Add logo text
    svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
    
    svgString += "</svg>";




    fs.writeFile('logo.svg', svgString, (err) => {
        err ? console.log(err) : console.log("Generated logo.svg");
    });



}

module.exports = generateSVG