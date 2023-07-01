const inquirer = require('inquirer');
const generateSVG = require('./generateSVG.js');


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
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        // Shape Color
        type: 'input',
        message: 'What color do you want your shape to be?',
        name: 'shapeColor',
    },
];



const promptUser = () => {
    inquirer.prompt(questions)
        .then((answers) => {
            //Text for logo must be less than or equal to 3 characters
            if (answers.text.length > 3) {
                console.log("3 Characters Max")
                promptUser
            } else {
                //Else generate the svg
                generateSVG(answers)
            }
        })
}

promptUser()

module.exports = Index




