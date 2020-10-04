const inquirer = require("inquirer");
const fs = require("fs");


inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "Enter your project title?"

    },
    {
        input: "input",
        name: "githubREPO",
        message: "What is URL to your Github Repo?"
    },

    {
        type: "input",
        name: "description",
        message: "Please provide a description including any necessary installation instructions, usage information, contribution guidelines, and test instructions?"
    },
    {
        type: "list",
        name: "license",
        message: "What licenses would you like to include?",
        choices: []
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

]).then(function (data) {
    console.log(data)
    const MyREADMETemplate = READMETemplate(data)

    fs.writeFile("README.html", MyREADMETemplate, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("success!")
        }

    });







    function READMETemplate(userAnswer) {
        return `<!doctype html>
<html lang="en">
  <head>
     <!-- Required meta tags -->
<meta charset="utf-8">
     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <title>Hello, world!</title>
   </head>
   <body>
     <div class="jumbotron">
         <h4 class="display-4">Name: ${userAnswer.userName}</h4>
         <h4 class="display-4">Location: ${userAnswer.location}</h4>
         <h4 class="display-4">Bio: ${userAnswer.bio}</h4>
        <h4 class="display-4">LinkedIn URL: ${userAnswer.linkedinUrl}</h4>
         <h4 class="display-4">Github URL: ${userAnswer.githubUrl}</h4>
       
       </div>

     <!-- Optional JavaScript -->
     <!-- jQuery first, then Popper.js, then Bootstrap JS -->
     <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
   </body>
</html>`
    }