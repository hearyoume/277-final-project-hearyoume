// Tests for my validators
import { describe, expect, it } from "vitest";

import { isValidAmount, isValidPlace } from "./validators.js";

describe("isValidAmount", () => {
  it("should return true for valid positive numbers", () => {
    expect(isValidAmount(10)).toBe(true);
    expect(isValidAmount("25.5")).toBe(true);
    expect(isValidAmount(0.01)).toBe(true);
  });

  it("should return false for non-positive numbers", () => {
    expect(isValidAmount(0)).toBe(false);
    expect(isValidAmount(-5)).toBe(false);
    expect(isValidAmount("abc")).toBe(false);
    expect(isValidAmount("")).toBe(false);
  });
});

describe("isValidPlace", () => {
  it("should return true for valid place names", () => {
    expect(isValidPlace("Grocery Store")).toBe(true);
    expect(isValidPlace("Amazon")).toBe(true);
    expect(isValidPlace("A".repeat(50))).toBe(true);
  });

  it("should return false for invalid place names", () => {
    expect(isValidPlace("")).toBe(false);
    expect(isValidPlace("  ")).toBe(false);
    expect(isValidPlace("AB")).toBe(false);
    expect(isValidPlace("A".repeat(51))).toBe(false);
  });
});
