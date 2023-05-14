function cutTheRopes(a) {
    let result = [];
    while (a.length > 0) {
      result.push(a.length);
      let min = Math.min(...a);
      a = a.map((rope) => rope - min).filter((rope) => rope > 0);
    }
    return result;
  }