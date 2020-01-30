/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

var binarySearch = function(array, target) {
//iterate through the array 
for (let i = 0; i < array.length; i++){
    //test each element to see if it matches the target element 
    //if the element matches is true 
    if (array[i] === target){
        //return that element's position 
    return i;
    }
}
};

var index = binarySearch([1, 2, 3, 4, 5], 5);
console.log(index); // 3
//var index = binarySearch([1, 2, 3, 4, 5], 8);
//console.log(index); 