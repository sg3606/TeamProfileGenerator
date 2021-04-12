const Intern = require('../lib/Engineer');

test('Set github', () => {
    const set_git = 'test001';
    const employee = new Intern('tester', 1, 'thisemail@gmail.com', set_git);
    expect(employee.github).toBe(set_git);
});

test('getRole()', () => {
    const get_role = 'Engineer';
    const employee = new Intern('tester', 1, 'thisemail@gmail.com', 'test001');
    expect(employee.getRole()).toBe(get_role);
});
  
test('getGithub()', () => {
    const set_git = 'test001';
    const employee = new Intern('tester', 1, 'thisemail@gmail.com', set_git);
    expect(employee.getGithub()).toBe(set_git);
});