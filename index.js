const inquirer = require("inquirer");
const fs = require("fs");

//use inquirer to prompt questions
inquirer.prompt([
    {
        input: "input",
        name: "githubUsername",
        message: "What is your Github Username?"
    },
    {
        input: "input",
        name: "githubREPO",
        message: "What is URL to your Github Repo?"
    },
    {
        type: "input",
        name: "title",
        message: "Enter your project title?"

    },
    {
        type: "input",
        name: "description",
        message: "Please provide a description for your README"
    },
    {
        type: "input",
        name:"installation", 
        message:"Please provide any necessary installation instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide any usage information"
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide any guidelines for contribution"
    },
    {
        type: "input",
        name: "tests",
        message: "Please provide any test instructions"
    },
    
    {
        type: "input",
        name: "license",
        message: "What licenses would you like to include?",
    
    },
    {
        input: "input",
        name: "githubUrl",
        message: "What is your Github URL?"
    },
    {
        input: "input",
        name: "email",
        message: "What is your email?"
    }

//use this function to write a file with the data entered by the user 
]).then(function (data) {
    console.log(data)
    const MyREADMETemplate = READMETemplate(data)

    fs.writeFile("generatedREADME.md", MyREADMETemplate, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("success!")
        }

    });

// I created a template as to where I want the users info to go. 

    function READMETemplate(userAnswer) {
        return `# ${userAnswer.title}
![GitHub top language](https://img.shields.io/github/languages/top/${userAnswer.githubUsername}/${userAnswer.title})
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
       
## Description 
${userAnswer.description}

## Table of Contents 
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation
${userAnswer.installation}

## Usage
${userAnswer.usage}

## License
${userAnswer.license}

## Contributing 
${userAnswer.contributing}

## Tests
${userAnswer.tests}

## Questions 
Please contact me if you have any questions at:
<br>Email: ${userAnswer.email}
<br>Github: ${userAnswer.githubUrl}
`
    }});