
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateHTML = require("./util/generateHTML");
const employeedataArray = [];



const managerQuestions = () => {
  inquirer.prompt([
    {
      type: "message",
      name: "name",
      message: "What is the manager's name?",
    },

    {
      type: 'input',
      name: 'email',
      message: "What is the manager's email?",
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "What is the manager's office number?",
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the manager's ID?"
    },
  ])
    .then((data) => {
      const managerData = new Manager(
        data.name,
        data.id,
        data.email,
        data.officeNumber
      );
      employeedataArray.push(managerData);
      addEmployee()
    });
};



const addEmployee = () => {
  inquirer.prompt([{

    type: "list",
    name: "addEmployee",
    message: "Would you like to add another employee?",
    choices: ["Yes", "No"],

  },
  ])
    .then((data) => {
      if (data.addEmployee === "Yes") {
        createEmployee();
      } else {
        renderHTML();
      }
    });

};


const createEmployee = () => {
  inquirer.prompt([{
    type: 'list',
    name: 'teamRole',
    message: "Which role does the team member have?",
    choices: ["Engineer", "Intern"],
  },
  ])
    .then((data) => {

      if (data.teamRole === "Engineer") {
        createEngineer();
      } else if (data.teamRole === "Intern") {
        createIntern();
      } 
    });
};


const internQuestions = [{
  type: 'input',
  name: 'name',
  choices: "What is the intern's name?",
},
{
  type: "input",
  name: "id",
  message: "What is the intern's ID?",
},
{
  type: 'input',
  name: 'email',
  message: "What is the intern's email address?",
},
{
  type: 'input',
  name: 'school',
  message: "What is the intern's school?",

}
]


const engineerQuestions = [{
  type: 'input',
  name: 'name',
  choices: "What is the Engineer's name?",
},
{
  type: "input",
  name: "id",
  message: "What is the Engineer's ID?",
},
{
  type: 'input',
  name: 'email',
  message: "What is the Engineer's email address?",
},
{
  type: 'input',
  name: 'github',
  message: "What is the Engineer Github username?",
}
]


const createEngineer = () => {
  inquirer.prompt(engineerQuestions)
    .then((data) => {
      const engineerData = new Engineer(
        data.name,
        data.id,
        data.email,
        data.github
      );
      employeedataArray.push(engineerData);
      addEmployee()
    });


}


const createIntern = () => {
  inquirer.prompt(internQuestions)
    .then((data) => {
      const internData = new Intern(
        data.name,
        data.id,
        data.email,
        data.school
      );
      employeedataArray.push(internData);
      addEmployee()
    });

}

const renderHTML = async () => {
  console.log(employeedataArray)
  const htmlPageContent = await generateHTML(employeedataArray);
  console.log(htmlPageContent)
  fs.writeFile('./dist/index.html', htmlPageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created index.html!')
  )
}
  


managerQuestions()