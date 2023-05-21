const Employee = require("./Employee");

const internQuestionsArr = [

    {
        type: 'input',
        name: 'name',
        message: "Enter the intern's name:"
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the intern's Id:"
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the intern's email:"
    },
    {
        type: 'input',
        name: 'school',
        message: "Enter the intern's school:"
    }

]

class Intern extends Employee {

    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }

	getSchool() {
		return this.school;
	}

	getRole() {
		return 'Intern';
	}

}

module.exports = { Intern, internQuestionsArr };
