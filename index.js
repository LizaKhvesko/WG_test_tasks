function solve(input) {
  result = '';
  input = input.split(',')
  
  let unique = [];
  for (let i=0;i<input.length;i++) {
    if (!unique.includes(+input[i])) {
      unique.push(+input[i])
    }
  }
  unique = unique.sort((a,b) => a-b)
 
  for (let i=0; i<unique.length; i++) {
    if ((unique[i+1] - unique[i]) !== 1) {
      result += String(unique[i]) + ','
      
    } else {
      let start = unique[i];
      let end = 0;
      while (unique[i+1] - unique[i] === 1) {
        end = unique[i+1]
        i++
      }      
      result += `${String(start)}-${String(end)},`
      i = unique.indexOf(end)
    }
  } 
  return result.slice(0,result.length-1)
}

const fs = require('fs')
const input = fs.readFileSync(0, 'utf-8') 
console.log(solve(input))