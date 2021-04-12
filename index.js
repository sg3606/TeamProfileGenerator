const fs = require('fs');
const inquirer = require('inquirer');
const html_ = require('./src/generatehtml');
const end_ = require('./src/endhtml')
const adding_eng = require('./src/addingEngineer')
const adding_intern = require('./src/addingIntern')
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// manager input
const manager_info = [
      {
        type: 'input',
        name: 'name',
        message: "Manager's name:",
      },
      {
        type: 'input',
        name: 'id',
        message: 'Employee ID:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Email:',
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'office number:',
      },
];

// add role
const select_role = [
      {
        type: 'checkbox',
        name: 'role',
        message: 'Add a team member or Finish Building:',
        choices: [  
                    'Engineer', 
                    'Intern',
                    'Finish Building'
                ]
      },
];

// engineer input
const add_engineer = [
     {
        type: 'input',
        name: 'name',
        message: "Engineer's name:",
      },
      {
        type: 'input',
        name: 'id',
        message: 'Engineer ID:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Email:',
      },
      {
        type: 'input',
        name: 'github',
        message: 'GitHub Username:',
      },
]

// intern input
const add_intern = [
    {
       type: 'input',
       name: 'name',
       message: "Intern's name:",
     },
     {
       type: 'input',
       name: 'id',
       message: 'Intern ID:',
     },
     {
       type: 'input',
       name: 'email',
       message: 'Email:',
     },
     {
       type: 'input',
       name: 'school',
       message: 'School:',
     },
]

function addmanager(fileName, data) {
    fs.writeFile(`./dist/${ fileName }`, data, (error) =>
        error ? console.error(error) : console.log('')
    )
};

function addintern(fileName, data) {
    fs.appendFile(`./dist/${ fileName }`, data, (error) =>
        error ? console.error(error) : console.log('')
    )
};

function addengineer(fileName, data) {
    fs.appendFile(`./dist/${ fileName }`, data, (error) =>
        error ? console.error(error) : console.log('')
    )
};

function endfile(fileName, data) {
    fs.appendFile(`./dist/${ fileName }`, data, (error) =>
        error ? console.error(error) : console.log('Success!')
    )
};

function add() {
    inquirer.prompt(select_role).then((data) =>{
        if(data.role == 'Intern'){
            inquirer.prompt(add_intern).then((data) =>{
                // addintern(fileName, data) 
                const name = data.name
                const id = data.id
                const email = data.email
                const school = data.school
                const thisintern = new Intern(name, id, email, school)
                addintern('index.html',adding_intern(thisintern))
                add()
            });
        } else if (data.role == 'Engineer'){
            inquirer.prompt(add_engineer).then((data) =>{
                // addengineer(fileName, data)
                const name = data.name
                const id = data.id
                const email = data.email
                const github = data.github
                const thiseng = new Engineer(name, id, email, github)
                addengineer('index.html',adding_eng(thiseng))
                add()
            });
        } else {
            endfile('index.html',end_ (data))
        }
    });
}

function start() {
    inquirer.prompt(manager_info).then((data) =>{
        // addmanager(fileName, data)
        const name = data.name
        const id = data.id
        const email = data.email
        const officeNumber = data.officeNumber
        const thismanage = new Manager(name, id, email, officeNumber)
        addmanager('index.html',html_ (thismanage))
        add()
    });
}

start();
