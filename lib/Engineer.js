const Employee = require("./Employee");

const engineerQuestionsArr = [

    {
        type: 'input',
        name: 'name',
        message: "Enter the engineer's name:"
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the engineer's Id:"
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the engineer's email:"
    },
    {
        type: 'input',
        name: 'github',
        message: "Enter the engineer's github user name:"
    }

]
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

	getRole() {
		return 'Engineer';
	}
	getGithub() {
		return this.github;
	}

}

module.exports = { Engineer, engineerQuestionsArr };
  