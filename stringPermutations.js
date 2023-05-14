const stringPermutations = (string) => {
    const results = [];
  
 
    // base cade:  check if input string is length 1, if it is,  only one char, so pushes that char into an array. 
    if (string.length === 1) {
      results.push(string);

      return results;
    }
   
    //iterate over string
    for (let i = 0; i < string.length; i++) {
      const firstChar = string[i];
      console.log(`First character is: ${firstChar}`);
     // gets A

     // gets BC
      const charsLeft = string.slice(0, i) + string.slice(i + 1);
      console.log(`Chars left are: ${charsLeft}`);

      //recursively call bc, to get innerpermutations array containing b,c, and c,b
      const innerPermutations = stringPermutations(charsLeft);
      console.log(`Inner permutations of ${charsLeft} are: ${innerPermutations}`);

     
      for (let j = 0; j < innerPermutations.length; j++) {
        const permutation = firstChar + innerPermutations[j];
        results.push(permutation);
        console.log(`Pushing permutation: ${permutation}`);
      }

      console.log("-------")
    }
   
    return results;
  }
  
  console.log(stringPermutations('abc')); // Output: ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']

