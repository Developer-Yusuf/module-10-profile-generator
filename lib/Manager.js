const Employee = require("./Employee");

const managerQuestionsArr = [

    {
        type: 'input',
        name: 'name',
        message: "Enter the manager's name:"
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the manager's Id:"
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the manager's email:"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Enter the manager's office number:"
    }

]

class Manager extends Employee{
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager'
    }

	getOfficeNumber() {
		return this.officeNumber;
	}

}

module.exports = { Manager, managerQuestionsArr } ;
