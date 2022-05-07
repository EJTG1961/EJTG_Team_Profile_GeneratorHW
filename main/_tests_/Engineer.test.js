const Engineer = require("../lib/Engineer");

test("Set Github account via constructor", () => {
  const testValue = "githubUser";
  const e = new Engineer("Foo", 1 , "test@email.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Foo", 1 , "test@email.com", "github");
  expect(e.getRole()).toBe(testValue);
});

test("Get github username via getGithub", () => {
  const testValue = "githubUser";
  const e = new Engineer("Foo", 1 , "test@email.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});
