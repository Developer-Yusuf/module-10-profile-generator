const inquirer = require('inquirer');
const template = require('./src/page-template');
const writeFile = require('./src/write-file');

// Import constructor classes and questions for each employee type
const { Manager, managerQuestionsArr } = require('./lib/Manager');
const { Engineer, engineerQuestionsArr } = require('./lib/Engineer');
const { Intern, internQuestionsArr } = require('./lib/Intern');

// Array to store all team member objects
const employeesArr = [];

// Initialize the application
const init = () => {
  promptManagerQuestions();
};

// Prompt manager-specific questions and create a Manager object based on user inputs
const promptManagerQuestions = () => {
  inquirer
    .prompt(managerQuestionsArr)
    .then((answers) => {
      const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
      employeesArr.push(manager);
      employeePrompt();
    });
};

// Prompt engineer-specific questions and create an Engineer object based on user inputs
const promptEngineerQuestions = () => {
  inquirer
    .prompt(engineerQuestionsArr)
    .then((answers) => {
      const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
      employeesArr.push(engineer);
      employeePrompt();
    });
};

// Prompt intern-specific questions and create an Intern object based on user inputs
const promptInternQuestions = () => {
  inquirer
    .prompt(internQuestionsArr)
    .then((answers) => {
      const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
      employeesArr.push(intern);
      employeePrompt();
    });
};

// Handle the employee type prompt
const employeePrompt = () => {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'employeeType',
        message: 'Enter the type of team member you want to add:',
        choices: [
          { name: 'Engineer', value: 'addEngineer' },
          { name: 'Intern', value: 'addIntern' },
          { name: 'DONE', value: 'done' },
        ],
      },
    ])
    .then((answer) => {
      if (answer.employeeType === 'addEngineer') {
        promptEngineerQuestions();
      } else if (answer.employeeType === 'addIntern') {
        promptInternQuestions();
      } else if (answer.employeeType === 'done') {
        // Convert user inputs into HTML
        const html = template(employeesArr);
        console.log('Generating HTML file...');
        // Create HTML file
        writeFile(html);
      }
    });
};

// Start the application
init();
