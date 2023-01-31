const Employee = require('./lib/Employee.js')
const Manager = require('./lib/Manager.js')
const Engineer = require('./lib/Engineer.js')
const Intern = require('./lib/Intern.js')
const inquirer = require("inquirer")
const fs = require("fs")
const generateHtml = require('./util/generateHtml.js')
const team = []

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is the manager's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the manager's employee ID number?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the manager's email address?",
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the manager's office number?",
    },
])
.then((ans) => {team.push (new Manager(ans.name,ans.id,ans.email,ans.officeNumber))
    getTeamMembers()})


function getTeamMembers() {
    inquirer
  .prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices:['Add an Engineer', 'Add an Intern', "Quit"]
    }]).then((ans) =>{
        if(ans.choice==='Add an Engineer'){
            createEngineer()
        } else if (ans.choice==='Add an Intern') {
            creatIntern()
        } else {
            fs.writeFile('generatedteam.html', generateHtml(team), err=>err?console.log(err):"");


        }
    })
}

function createEngineer(){
    inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is the Engineer's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the Engineer's employee ID number?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the Engineer's email address?",
    },
    {
        type: "input",
        name: "github",
        message: "What is the Engineer's GitHub Username?",
    },
])
.then((ans) => { team.push (new Engineer(ans.name,ans.id,ans.email,ans.github))
getTeamMembers()})
}
function creatIntern(){
    inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is the Intern's name?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the Intern's employee ID number?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the Intern's email address?",
    },
    {
        type: "input",
        name: "school",
        message: "What is the Intern's School?",
    },
])
.then((ans) => {team.push (new Intern(ans.name,ans.id,ans.email,ans.school))
    getTeamMembers()})}