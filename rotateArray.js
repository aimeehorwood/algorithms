function solution(A, K) {
  if (K <= 0) {
    return A;
  }

  let first = A.slice(0, A.length - K);

  let second = A.slice(A.length - K, A.length);

  console.log(second)
  const result = second.concat(first);

  return result;
}

console.log(solution([1,2,3,4,5],3))