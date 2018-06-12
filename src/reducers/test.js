const testArray = [
  { name: "one" },
  { name: "two" },
  { name: "three" },
  { name: "four" },
  { name: "five", cosmetic: "5" }
];

const test = (state = testArray, action) => {
  return state;
};

export default test;
