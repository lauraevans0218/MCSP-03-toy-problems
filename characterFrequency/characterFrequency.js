// Write a function that takes as its input a string
// and returns an array of arrays as shown below
// sorted in descending order by frequency
// and then by ascending order by character.

// "aaabbc" => [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]
// "mississippi" => [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]
// "" => [ ]

function characterFrequency(str) {
//create an empty obj 
let result = {};
//if string is empty return empty array
if (str === '') {
    return [];
} else {
    //iterate through str 
    for (let i = 0; i < str.length; i++){
        //assign each letter as a key in the obj with the value of 1
        result.str[i] = 1;
        //if after each iteration the key is the same 1++ the value 
        if (result.str[i] === str[i]) {
            result.str[i]++;
        }
    }
//return result obj 
return result;
Object.entries(result);
}
//transform the object into an array with arrays 
//sort the array 
}

console.log(characterFrequency('aaabbc'));