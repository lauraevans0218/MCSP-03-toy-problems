// Given a string, return true if it contains all balanced parenthesis (),
// curly-brackets {}, and square-brackets [].

//                        Examples
//               Input	                       Output
// str: "(x + y) - (4)"           |   true
// str: "(x + y) - (4)"           |   true
// str: "(((10 ) ()) ((?)(:)))"   |   true
// str: "[{()}]"                  |   true
// str: "(50)("                   |   false
// str: "[{]}"                    |   false
const isBalanced = str => {
    let parentheses = "(){}[]";
    let stack = [];
      //iterate through str
    for(let i = 0; i < str.length ; i++) {
        let character = str[i];
        let bracePosition = parentheses.indexOf(character);
  
      if(bracePosition === -1) {
          //continue? 
        continue;
      }
  
      if(bracePosition % 2 === 0) {
        stack.push(bracePosition + 1); // push next expected brace position
      } else {
        if(stack.length === 0 || stack.pop() !== bracePosition) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
};
//can't get it return false
console.log(isBalanced([((({}50]));