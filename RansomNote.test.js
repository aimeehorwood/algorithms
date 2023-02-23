const harmlessRansomNote = require('./RansomNote');

describe('harmlessRansomNote', () => {
  it('returns true if all words in the note are present in the magazine', () => {
    expect(harmlessRansomNote('this is a note', 'this is a magazine with a note')).toBe(true);
  });

  it('returns false if any word in the note is not present in the magazine', () => {
    expect(harmlessRansomNote('this is a note', 'this is not the magazine you are looking for')).toBe(false);
  });

  it('returns true if all repeated words in the note are present in the magazine', () => {
    expect(harmlessRansomNote('note note', 'this is a note with two note')).toBe(true);
  });

  it('returns true when given empty note and magazine strings', () => {
    expect(harmlessRansomNote('', '')).toBe(true);
  });

  it('returns false when given an empty magazine', () => {
    expect(harmlessRansomNote('this is a note', '')).toBe(false);
  });

  it('returns false when given an empty note', () => {
    expect(harmlessRansomNote('', 'this is a magazine')).toBe(false);
  });

  it('returns true when given special characters', () => {
    expect(harmlessRansomNote('$pecial not3', 'this is a $pecial not3 with a special note')).toBe(true);
  });
});