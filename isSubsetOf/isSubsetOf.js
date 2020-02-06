/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
 */

/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
 */

Array.prototype.isSubsetOf = function(arr) {

  // iterates through the given array 
  for (var i = 0; i < arr.length; i++) {
    //test if each element is in the other array by using includes method 
    if(arr.includes(arr[i])) { //will always be true...how to compare that element to another element in another array that isn't passed in
      //return that response (should be a boolean)
      return true;
    } else {
      return false;
    }
  }
};

var a = ['commit','push'];
console.log(a.isSubsetOf(['commit','rebase','push','blame']));

var b = ['merge','reset','reset'];
 
console.log(b.isSubsetOf(['reset','merge','add','commit']));

var c = ['cat', 'dog', 'pony'];
console.log(c.isSubsetOf(['horse', 'puppy', 'kitten']));//should be false...see line 29