const lib = require('./index.js');
// const evenNumber = require("./index.js")

const weekNum = lib.getWeekNumber
const evenNum = lib.getEvenNumber

test('that weekNum returns a value', () => {
  expect(weekNum).not.toBeNull();
});


test('that weekNum returns a number', () => {
  expect(weekNum).toBeDefined();
});

test('This is even number', () =>{
  expect(evenNum() % 2).toBe(0)
})

test("This is also even number", () =>{
  expect(evenNum() % 2).not.toBeNull();
})