import sum from "../../functions/sum";

describe("Test sum function", () => {
  describe("sums up", () => {
    test.only("2 numbers", () => {
      const result = sum(2, 3);
      expect(result).toBe(5);
    });

    test.skip("this api isn't implemented yet", () => {
      const result = sum(2, 3, 5);
      expect(result).toBe(10);
    });
  });
});
