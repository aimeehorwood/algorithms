const firstNonRepeating = require("./firstNonRepeating");

describe("firstNonRepeating", () => {
  it("returns first non repeating char", () => {
    expect(firstNonRepeating("stress")).toBe("t");
    expect(firstNonRepeating("moonmen")).toBe("e");
  });

  it("returns first non repeating char ignoring case", () => {
    expect(firstNonRepeating("sTreSs")).toBe("T");
    expect(firstNonRepeating("mOonmen")).toBe("e");
  });

  it("can handle empty strings", () => {
    expect(firstNonRepeating("")).toBe("");
  });

  it("can handle repeating strings where there isn't a repeating char", () => {
    expect(firstNonRepeating("repeat repeat repeat")).toBe("");
  });
});
