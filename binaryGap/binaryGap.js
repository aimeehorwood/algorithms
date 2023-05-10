
function solution(N) {
    let binary = N.toString(2);

    let length = 0;
    let max_length = 0;
  
    for (let i = 0; i < binary.length; i++) {
      if (binary[i] === "0") {
        length += 1;
      } else {
        if (length > max_length) {

          max_length = length;
        }
        length = 0;
      }
    }
  
    return max_length;
  }
  
  
console.log(solution(666));
