// require manager and employee form lib
const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");
// can set office number
test("Set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, 'test@email.com', testValue);
    expect(e.office).toBe(testValue);
  });

// role returns manager
test('getRole should return \"Manager\"', () => {
  const testValue = "Manager";
  const e = new Manager("Foo", 1, "test@email.com", testValue);
  expect(e.getRole()).toBe(testValue);
});

// can get office number
test("Get office number via constructor function", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@email.com", testValue);
  expect(e.getOffice()).toBe(testValue);
});