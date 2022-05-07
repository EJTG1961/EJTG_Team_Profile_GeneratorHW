// require employee form the lib folder
const Employee = require("../lib/Employee");

// test can begin employee instance
// describe('Employee', () => {
  test("Begin the instance employee", () => {
    const e = new Employee();
    expect(typeof (e)).toBe("object");
  });

  // test can set name via constructor args
  test("Can set a name with the constructor arguments", () => {
    const name = "Paul";
    const e = new Employee(name);
    expect(e.name).toBe(name);
  });

  // can set id via constructor args
  test("Can set the Id the constructor arguments", () => {
    const testValue = 100;
    const e = new Employee("Foo", testValue);
    expect(e.id).toBe(testValue);
  });
  // can set email via constructor args
  test("Can set email with the constructor arguments", () => {
    const testValue = "test@email.com";
    const e = new Employee("Foo", 1, testValue);
    expect(e.email).toBe(testValue);
  });


  //  get name via constructor function
  test("Can get name with getName", () => {
    const testValue = "Paul";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
  });
  //  get set id via constructor function
  test("Can get id with getId", () => {
    const testValue = 100;
    const e = new Employee("Foo", testValue);
    expect(e.getId()).toBe(testValue);
  });

  //  get email via constructor function
  test("Can get email with getEmail", () => {
    const testValue = "test@email.com";
    const e = new Employee("Foo", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
  });

  //  get role via constructor function
  test("With getRole should return\"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("Paul", 1, testValue);
    expect(e.getRole()).toBe(testValue);
  });
