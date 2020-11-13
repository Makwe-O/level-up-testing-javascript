import { subtract, sum, multiply } from "./math";
import { expect, test } from "./assertion";

test("it should add number correctly", () => {
  const result = sum(2, 4);
  const actual = 6;
  expect(result).toBe(actual);
});
test("it should subtract number correctly", () => {
  const result = subtract(8, 4);
  const actual = 4;
  expect(result).toBe(actual);
});
test("it should be greater that bar", () => {
  const result = sum(4, 1);
  const bar = 0;
  expect(result).toBeGreater(bar);
});
