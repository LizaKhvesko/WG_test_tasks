function solve(input) { 
    input = Number(input);
  let result = [];
  if(input === 1) {return '2'}
  else {
    for (let n=2; n<input*2; n++) {
        let sum = 0;
        let l = n;
        while (l%2===0) {
          sum += l/2
          l = l/2
        }
        for (let j = 1; j<l; j++) {
        sum += (l-j)      
        }
         if (sum === input) result.push(n)  
    }

    
    if (result.length ===0) return -1
  }
  result.sort()
  if (result.length ===1) return String(result[0])
  else {return `${result[0]}\n${result[1]}`}
}

const fs = require('fs')
const input = fs.readFileSync(0, 'utf-8') 
console.log(solve(input))