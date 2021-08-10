// TWO SUM
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-2^31, 2^31 - 1], then return 0.
// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

var reverse = function (x) {
  // Need to convert x from number to string to split into an array and reverse. then convert back to int with parseInt
  let reverseX = parseInt(x.toString().split("").reverse().join(""));
  if (reverseX < Math.pow(2, 31) * -1 || reverseX > Math.pow(2, 31) - 1)
    return 0;
  // Math.sign returns either a positive or negative 1 depending on x that is passed in
  return reverseX * Math.sign(x);
};

// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.

var isPalindrome = function (x) {
  let revX = parseInt(x.toString().split("").reverse().join(""));
  if (revX == x) return true;
};
