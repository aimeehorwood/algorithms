const  emotionalSort = (arr, order) => {
    
    const emotionMap = {
      ':D': 0,
      ':)': 1,
      ':|': 2,
      ':(': 3,
      'T_T': 4,
    };
    
    return arr.sort((a, b) => {
      if (order) return emotionMap[a] - emotionMap[b];
      return emotionMap[b] - emotionMap[a]
    });
}

module.exports = emotionalSort;