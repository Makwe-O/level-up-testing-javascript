export const expect = (result) => {
  return {
    toBe: (actual) => {
      if (actual !== result) {
        throw new Error(`Expected ${actual} but got ${result}`);
      } else {
        console.log("Test passed");
      }
    },
    toBeGreater: (bar) => {
      if (result <= bar) {
        throw new Error(`Expected ${result} to be greater than ${bar}`);
      } else {
        console.log("Test passed");
      }
    },
  };
};

export const test = (title, callback) => {
  try {
    callback();
    console.log(`> ${title}`);
  } catch (err) {
    console.error(`X ${title}`);
    console.error(err);
  }
};
