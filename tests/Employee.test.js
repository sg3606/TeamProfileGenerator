const Employee = require('../lib/Employee');
 
describe('Employee', () => {
  it('Employ object', () => {
    const employee = new Employee();
    expect(typeof(employee)).toBe('object');
  });

  it('Set name', () => {
    const set_name = 'tester';
    const employee = new Employee(set_name);
    expect(employee.name).toBe(set_name);
  });

  it('Set id', () => {
    const set_id = '1';
    const employee = new Employee('test',set_id);
    expect(employee.id).toBe(set_id)
  });

  it('Set email', () => {
    const set_email = 'thisemail@gmail.com';
    const employee = new Employee('test', 1, set_email);
    expect(employee.email).toBe(set_email)
  });

    describe('getName', () => {
        it('Get name', () => {
            const set_name = 'tester';
            const employee = new Employee(set_name);
            expect(employee.getName()).toBe(set_name );
        });
    });
    
    describe('getId', () => {
        it('Get Id', () => {
            const set_id = '1';
            const employee = new Employee('test',set_id);
            expect(employee.getId()).toBe(set_id)
        });
    });
        
    describe('getEmail', () => {
        it('Get email', () => {
            const set_email = 'thisemail@gmail.com';
            const employee = new Employee('test', 1, set_email);
            expect(employee.getEmail()).toBe(set_email)
        });
    });
        
    describe('getRole', () => {
        it('Get role', () => {
            const set_role = 'Employee';
            const employee = new Employee('tester', 1, 'thisemail@gmail.com');
            expect(employee.getRole()).toBe(set_role );
        });
    }); 
});
