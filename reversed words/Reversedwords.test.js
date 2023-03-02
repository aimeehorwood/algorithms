const reverseWords = require("./Reversedwords");

describe("reverseWords", () => {
  it("reverses string containing one word", () => {
    expect(reverseWords("ok")).toBe("ko");
  });

  it("reverses string containing two words", () => {
    expect(reverseWords("hello aimee")).toBe("olleh eemia");
  });

  it("reverses empty string", () => {
    expect(reverseWords("")).toBe("");
  });

  it("reverses string containing multiple spaces between words", () => {
    expect(reverseWords("  hi    there  ")).toBe("  ih    ereht  ");
  });

  it("reverses string containing punctuation marks", () => {
    expect(reverseWords("hello, world!")).toBe(",olleh !dlrow");
  });

  it("reverses string containing numbers", () => {
    expect(reverseWords("hello 123")).toBe("olleh 321");
  });
});
