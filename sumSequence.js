const findSumSequence = (arr, target) => {
    console.log(`arr: ${arr}, target: ${target}`);
    if (target === 0) {
      console.log('Found target!');
      return true; // base case: target is found
    }
    if (arr.length === 0) {
      console.log('Array is empty!');
      return false; // base case: array is empty
    }
    const first = arr[0];
    const rest = arr.slice(1);
    const result = findSumSequence(rest, target - first) || findSumSequence(rest, target);

    console.log(`Result for arr ${arr} and target ${target}: ${result}`);
    
    return result;
  }
  
  console.log(findSumSequence([10, 3, 1, 7], 8));
  