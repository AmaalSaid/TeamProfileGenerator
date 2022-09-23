
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generateHTML = require("./dist/generateHTML");
const employeedataArray = [];


function main () 
const managerQuestions = () => {
  inquirer.prompt([
    {
    type: "message",
    name: "managerName",
    message: "What is the manager's name?",
  },
    
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the manager's email?",
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: "What is the manager's office number?",
      },
      {
        type: 'input',
        name: 'managerId',
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
      generateHTML();
    }
  });

  };
const createEmployee = () => {
  inquirer.prompt([{
    type: 'list',
    name: 'teamRole',
    message: "Which role does the team member have?",
    choices: ["Employee", "Engineer", "Intern", "Manager"],
},
  ])
  .then((data) => {
    if (data.addEmployee === "Employee") {
      createEmployee();
    }
    if (data.addEmployee === "Engineer") {
      createEngineer();
    } else if (data.addEmployee === "Intern") {
      createIntern();
    } else {
      renderHtml();
    }
  });
};


  const internQuestions = [ {
    type: 'input',
    name: 'internName',
    choices: "What is the intern's name?",
  },
  {
    type: "input",
    name: "internId",
    message: "What is the intern's ID?",
  },
  { 
    type: 'input',
    name: 'internEmail',
    message: "What is the intern's email address?",
  },
  {
    type: 'input',
    name: 'school',
    message: "What is the intern's school?",

  },
  ]

  const employeeQuestions = [ {
    type: 'input',
    name: 'employeeName',
    choices: "What is the Employee's name?",
  },
  {
    type: "input",
    name: "employeeId",
    message: "What is the Employee's ID?",
  },
  { 
    type: 'input',
    name: 'employeeEmail',
    message: "What is the Employee's email address?",
  },
    ]
const engineerQuestions = [ {
    type: 'input',
    name: 'engineerName',
    choices: "What is the Engineer's name?",
  },
  {
    type: "input",
    name: "engineerId",
    message: "What is the Engineer's ID?",
  },
  { 
    type: 'input',
    name: 'engineerEmail',
    message: "What is the Engineer's email address?",
  },
]



  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });