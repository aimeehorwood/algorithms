const coachPairs = (array) => {
    const pairs = [];
    // Iterate over every pair of distinct students
    for (let i = 0; i < array.length; i++) {
      
      for (let j = i + 1; j < array.length; j++) {
       
        pairs.push([array[i], array[j]]);
      }
    }

    console.log(pairs)

    const finalPairs = [];
    // Partition the pairs array into groups of two
    for (let i = 0; i < pairs.length; i += 2) {
      finalPairs.push([pairs[i], pairs[i + 1]]);
    }
    return finalPairs;
  };
  
  console.log(coachPairs(["Alice", "Bob", "Charly", "Dan"]));