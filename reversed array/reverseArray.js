//array as param
//reverse array passed in, not pushing elements into new array
//without array.reverse() method 

const reverseArray = (array) => {
    const arrayLength = array.length;
    for (let startIndex = 0; startIndex < arrayLength / 2; startIndex++) {
      const endIndex = arrayLength - 1 - startIndex;
      const tempElement = array[startIndex];
      array[startIndex] = array[endIndex];
      array[endIndex] = tempElement;
    }
    return array;
  }


module.exports = reverseArray;