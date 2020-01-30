/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */
var commonCharacters = function(string1, string2) {
    //create a result empty string
    let result = ''; 
    //split the string using ''
    let firstStr = string1.split('');
    //create an array of the strings and compare it using slice at 1
    let stringToCompare = arguments[1];=-[]'
    )'
    //console.log(firstStr)
    
    console.log(stringToCompare);
    //loop through that new array 
    for (var i = 0; i < firstStr.length; i++) {
        let currentLtr = firstStr[i];
        //console.log(currentLtr);

        //ignore duplicates and spaces (use includes and filter)
        //if result already has the current letter and is not an empty string
        if (result.includes(currentLtr) && result !== '') {
         //filter through comparedstrings, filter needs a func as a param
            let compare = function(str){
                return str.includes(currentLtr)}
            let filteredLtr = stringToCompare.filter(compare);
            console.log(filteredLtr);
        }
    }
    //if both strings are the same length
    if(filteredLtr.length === stringToCompare.length){
        //add the current character to the empty string
        result += currentLtr;
    }
    //return result string
    return result;
    
  };


  console.log(commonCharacters('acexivou', 'aegihobu'));