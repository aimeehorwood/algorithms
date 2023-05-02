const hammeringDistance = require("./hammeringDistance");

describe("hammeringDistance", () => {
  it("should measure minimum number of substitutions between 'kabhrin' and 'kathrin'", () => {
    expect(hammeringDistance("kabhrin", "kathrin")).toBe(1);
  });

  it("should measure minimum number of substitutions between 'karolin' and 'kerstin'", () => {
    expect(hammeringDistance("karolin", "kerstin")).toBe(3);
  });

  it("should measure minimum number of substitutions between '0000' and '1111'", () => {
    expect(hammeringDistance("0000", "1111")).toBe(4);
  });

  it("should throw an error when given strings of unequal length", () => {
    expect(() => {
      hammeringDistance("2173896", "1111");
    }).toThrow("strings must be of equal length");
  });
});
