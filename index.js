const inquirer = require('inquirer');
const fs = require('fs');

const Circle = require(`./lib/circle`)
const Triangle = require(`./lib/triangle`)
const Rectangle = require(`./lib/rectangle`)

const questions = [
    {
        //Text
        type: 'input',
        message: 'What text would you like on your logo?',
        name: 'text',
    },
    {
        //Text Color
        type: 'input',
        message: 'What color would you like your text?',
        name: 'textColor',
    },
    {
        //Shapes
        type: 'list',
        message: 'What Shape do you want for your logo?',
        name: 'shape',
        choices: ['Circle', 'Triangle', 'Square'],
    },
    {
        // Shape Color
        type: 'input',
        message: 'What color do you want your shape to be?',
        name: 'shapeColor',
    },
];

const generateSVG = (answers) => {
    let newShape 
    //Pick which shape was declared
    //Order is Text, Textcolor, then shapecolor
    if (answers.shape === 'Circle') {
 
        newShape = new Circle(answers.text,answers.textColor,answers.shapeColor)
 
     } else if (answers.shape === 'Triangle') {
        
        newShape = new Triangle(answers.text,answers.textColor,answers.shapeColor)

     } else if (answers.shape === 'Square') {
         
        newShape = new Rectangle(answers.text,answers.textColor,answers.shapeColor)
        
     }
 console.log(newShape.render())
 
     // Write it to a file and print
     fs.writeFile('logo.svg', newShape.render(), (err) => {
         err ? console.log(err) : console.log("Generated logo.svg");
  });
 
 
 
 }

const init =  () => {
     inquirer
     .prompt(questions)
        .then((answers) => {
            
            //Text for logo must be less than or equal to 3 characters
            if (answers.text.length > 3) {
                console.log("3 Characters Max")
                init()
            } else {
                
                //Else generate the svg
                generateSVG(answers)
            }
            return answers
        }) 
   
}

init();





