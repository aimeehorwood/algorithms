function luckyNumbers(ticket) {
    if (ticket.length === 0 || !/^\d+$/.test(ticket)) {
      throw new Error("invalid input");
    }
    
    const convertNumbers = ticket.split("");
    
    const figure = Math.floor(ticket.length / 2);
  
    const firstHalf = convertNumbers.slice(0, figure);
    const secondHalf = convertNumbers.slice(
      Math.ceil(ticket.length / 2),
      ticket.length);
    
    const a = firstHalf.map(Number).reduce((acc, cur) => acc + cur);
    const b = secondHalf.map(Number).reduce((acc, cur) => acc + cur);
  
    return a === b;
  }
  

module.exports = luckyNumbers;
