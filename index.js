const isPalindrome = require('../index');

describe('isPalindrome', function() {
  it('returns true for "abba"', function() {
    const result = isPalindrome("abba");
    expect(result).toBe(true);
  });

  it('returns true for "racecar"', function() {
    const result = isPalindrome("racecar");
    expect(result).toBe(true);
  });

  it('returns true for "a"', function() {
    const result = isPalindrome("a");
    expect(result).toBe(true);
  });

  it('returns false for "robot"', function() {
    const result = isPalindrome("robot");
    expect(result).toBe(false);
  });

  it('returns false for "ab"', function() {
    const result = isPalindrome("ab");
    expect(result).toBe(false);
  });
});
