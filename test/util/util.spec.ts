import { expect } from "chai";
import { StringCalculator } from "StringCalculator";

describe("StringCalculator", () => {
  let calculator: StringCalculator;

  beforeEach(() => {
    calculator = new StringCalculator();
  });

  it("should return 0 for an empty string", () => {
    expect(calculator.add("")).to.equal(0);
  });

  it("should return the number itself for a single number", () => {
    expect(calculator.add("1")).to.equal(1);
    expect(calculator.add("5")).to.equal(5);
  });

  it("should return the sum of two numbers", () => {
    expect(calculator.add("1,2")).to.equal(3);
    expect(calculator.add("10,20")).to.equal(30);
  });

  it("should throw an error for negative numbers", () => {
    expect(() => calculator.add("1,-2,3")).to.throw(
      "negative numbers not allowed: -2"
    );
    expect(() => calculator.add("-1,2,-3")).to.throw(
      "negative numbers not allowed: -1, -3"
    );
  });

});
