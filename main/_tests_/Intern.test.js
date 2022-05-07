const Intern = require("../lib/Intern");

test("Get school via constructor argument", () => {
  const testValue = "UF";
  const e = new Intern("Foo", 1, "test@email.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Foo", 1, "test@email.com", "UF");
  expect(e.getRole()).toBe(testValue);
});

test("Get school via getSchool", () => {
  const testValue = "UF";
  const e = new Intern("Foo", 1, "test@email.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
