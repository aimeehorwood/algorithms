function findMaxSumSubarray(arr, k) {
    let windowSum = 0;
  
    // Calculate sum of first window of size k
    for (let i = 0; i < k; i++) {
      windowSum += arr[i];
    }
    console.log(`Window sum at start: ${windowSum}`);
  
    // Slide the window and calculate max sum
    let maxSum = windowSum;
    // - k + 1 so we dont slide beyond last poss position 
    for (let i = 1; i < arr.length - k + 1; i++) {

        // slide the window, we subtract leftmost element of window and add the right most element of window 
      windowSum = windowSum - arr[i-1] + arr[i+k-1];

      console.log(`Window sum after sliding: ${windowSum}`);

      maxSum = Math.max(maxSum, windowSum);

      console.log(`Max sum so far: ${maxSum}`);
    }
  
    return maxSum;
  }
  
  let arr = [1, 3, -1, -3, 5, 3, 6, 7];
  let k = 3;
  let maxSum = findMaxSumSubarray(arr, k);
  
  console.log("Array:", arr);
  console.log("Subarray size:", k);
  console.log("Max sum:", maxSum);
  
  //Initially, we start with the window [1, 3, -1] and compute its sum as 3. To slide the window, we remove the leftmost element 1 and add the rightmost element 5. So the new window is [3, -1, -3] and its sum is windowSum = windowSum - arr[i-1] + arr[i+k-1] = 3 - 1 + 5 = 7.