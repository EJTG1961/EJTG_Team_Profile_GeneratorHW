const inquirer = require("inquirer");
const fs = require("fs");
// const createTeam = require(/src/page-template.js)

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");


// Still need to get HTML and CSS finalized but have to 
//fix test issues first
const generateHTML = (
  username,
  position,
  id,
  officeNumber,
  email,
  github,
  school,
) => ``;

const questions = async () => {
  const answers = await inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name",
      },
      {
        type: "input",
        message: "What is your id",
        name: "id",
      },
      {
        type: "input",
        message: "What is your email?",
        name: "email",
      },
      {
        type: "list",
        message: "What position are you applying for?",
        choices: ["Manager", "Engineer", "Intern"],
        name: "role",
      },
    ])

  // If manager is the role choice
  if (answers.role === "Manager") {
    const managerAnswer = await inquirer
      .prompt([
        {
          type: "input",
          message: "What is your office number?",
          name: "office",
        }
      ])
    const newManager = new managerAnswer(
      answers.name,
      answers.id,
      answers.email,
      managerAnswer.officeNumber
    );
    newTeamMemberData.push(newManager);

  }

  // Egineer role choice
  if (answers.role === "Engineer") {
    const engineerAnswer = await inquirer
      .prompt([
        {
          type: "input",
          message: "What is your Githup username?",
          name: "github",
        }
      ])
    const newEngineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      githubAnswer.github
    );
    newTeamMemberData.push(newEngineer);

  }


  if (answers.role === "Intern") {
    const internAnswer = await inquirer
      .prompt([
        {
          type: "input",
          message: "What university did you attend?",
          name: "school",
        }
      ])
    const newIntern = new internAnswer(
      answers.name,
      answers.id,
      answers.email,
      internAnswer.school
    );
    newTeamMemberData.push(newIntern);


  }
  

  

  then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile("index.html", htmlPageContent, (err) =>
      err ? console.log(err) : console.log("Successfully created index.html!")
    );
  });
  
}  