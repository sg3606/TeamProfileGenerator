const Intern = require('../lib/Intern');

test('Set school', () => {
    const set_school = 'UW';
    const employee = new Intern('tester', 1, 'thisemail@gmail.com', set_school);
    expect(employee.school).toBe(set_school);
});

test('getRole()', () => {
    const get_role = 'Intern';
    const employee = new Intern('tester', 1, 'thisemail@gmail.com', 'UW');
    expect(employee.getRole()).toBe(get_role);
});
  
test('getSchool()', () => {
    const set_school = 'UW';
    const employee = new Intern('tester', 1, 'thisemail@gmail.com', set_school);
    expect(employee.getSchool()).toBe(set_school);
});