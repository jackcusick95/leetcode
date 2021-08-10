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


// Given a roman numeral, convert it to an integer.

var romanToInt = function(s) {
	const roman = {
	    "I": 1,
	    "V": 5,
	    "X": 10,
	    "L": 50,
	    "C": 100,
	    "D": 500,
	    "M": 1000
	}
	
	let ans = 0
	for (let i = s.length-1; i >= 0; i--) {
	    let num = roman[s.charAt(i)]
	    if (4 * num < ans) ans -= num
	    else ans += num
	}
	return ans
    };

//     Write a function to find the longest common prefix string amongst an array of strings.

//     If there is no common prefix, return an empty string "".
    
    var longestCommonPrefix = function(strs) {
	if (strs == null || strs.length == 0) return "";
	for (let i = 0; i < strs[0].length; i++) {
	    let char = strs[0].charAt(i);
	    for (let j = 1; j < strs.length; j++) {
		if (i == strs[j].length || strs[j].charAt(i) != char)
		    return strs[0].slice(0, i)
	    }
	}
	return strs[0]; 
    };
    