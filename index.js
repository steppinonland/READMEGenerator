const questions = [
    {
        type: "input",
        message: "What's the title of your project?",
        name: "title"
      },
      {
        type: "input",
        message: "What is this repository for? Enter a brief description.",
        name: "description"
      },
      {
        type: "input",
        message: "What's the title of your project?",
        name: "title"
      },
      {
        type: "checkbox",
        message: "Which license would you like?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
        name: "licenses",
        checked: true,
      },
      {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "dependencies"
      },
      {
        type: "input",
        message: "What does the user need to know about using the repo?",
        name: "n2k"
      },
      {
        type: "input",
        message: "What does the user need to know when contributing to this repo?",
        name: "contribute"
      },
];

var inquirer = require("inquirer");
var fs = require("fs")
inquirer.prompt(questions).then(function(data) {
    var fileName = data.title.toLowerCase().split(' ').join('') + ".md";
    var titleEl = `Repository Name: ${data.title}`;
    var license = '\n'+`https://img.shields.io/badge/license-${data.license}-brightgreen`;
    var dependencies = '\n'+`Command to install dependencies: ${data.dependencies}`;
    var know = '\n'+`What you need to know when using this repo: ${data.n2k}`;
    var contribute = '\n'+`What you need to know when contributing to this repo: ${data.contribute}`;
    fs.writeFile(fileName, [titleEl + license + dependencies + know + contribute], (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Your README has been generated.");
        }
    });
  });
