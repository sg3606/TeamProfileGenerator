const Intern = require('../lib/Manager');

test('Set office number', () => {
    const set_number = '999999999';
    const employee = new Intern('tester', 1, 'thisemail@gmail.com', set_number);
    expect(employee.officeNumber).toBe(set_number);
});

test('getRole()', () => {
    const get_role = 'Manager';
    const employee = new Intern('tester', 1, 'thisemail@gmail.com', '999999999');
    expect(employee.getRole()).toBe(get_role);
});
  
test('getOfficeNumber()', () => {
    const set_number = '999999999';
    const employee = new Intern('tester', 1, 'thisemail@gmail.com', set_number);
    expect(employee.getOfficeNumber()).toBe(set_number);
});