const Employee = require('../lib/Employee');

test('Creates new employee', () => {
    const employee = new Employee('Yusuf Mark', 1234, 'yusuf@mark.com');

    expect(employee.name).toBe("Yusuf Mark");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test('Checks all methods for Employee class', () => {
    const employee = new Employee('Yusuf Mark', 1234, 'yusuf@mark.com');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getRole()).toBe('Employee');
})

