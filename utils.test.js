functions = require("./utils");

test("Mutiply 2 * 2 to equal 4", () => {
  expect(functions.multiply(2, 2)).toBe(4);
});

test("Adds 2 + 2 to equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("To be null", () => {
  expect(functions.isNull()).toBeNull();
});

test("User fetched should be Leanne Graham", async () => {
  expect.assertions(1);
  return functions.getUser().then(data => {
    expect(data.name).toBe("Leanne Graham");
  });
});

test("Post id should be 1", async () => {
  expect.assertions(1);
  return functions.getPost().then(data => {
    expect(data.id).toBe(1);
  });
});
