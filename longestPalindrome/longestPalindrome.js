/**
 * Implement a function that finds the longest palindrome in a given string.
 * For example, in the string "My dad is a racecar athlete", the longest
 * palindrome is "a racecar a". Count whitespaces as valid characters. Other
 * palindromes in the above string include "dad", "ete", " dad " (including
 * whitespace on each side of dad).
 */

let longestPalindrome = function(str) {
    //identify the palindromes in the string first
let reversed = str.split("").reverse().join("");
    //check to see if the str is the same when it's reversed
    return str == reversed; 
};
        
    function longest_palindrome(str){
        
    let max_length = 0,
            maxspace = '';
        
        for(let i=0; i < str.length; i++) {
            //use substring to get each word out of the overall string (start at i until the string length)
        let eachWord = str.substring(i, str.length);
        
            if (longestPalindrome(eachWord)) {
            return eachWord.length;
            }
            //compare eachWord's length amongst the other palindrome words 
        }
    };
