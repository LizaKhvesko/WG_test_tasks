class Templater {
constructor() {
    let result = '';
}

div(...args) {
      
     const element = document.createElement('div');
     for (let arg of args) {
  if (arg && typeof arg === 'string') {
         element.innerHTML = arg;
     } else if (arg && typeof arg === 'object') {
       let w = {};
   Object.keys(arg).sort().map(i=>w[i]=arg[i]);
  
          for (const i in w) {
             if (i === 'class') {
              let arr =w[i].split(' ')
                for (let j=0; j<arr.length; j++) {
                  element.classList.add(arr[j])
                }
          } else {
            element[i] = arg[i];
          }
          }
     }
}
     this.result = element; 

}
  
p(...args) {
      
     const element = document.createElement('div');
     for (let arg of args) {
  if (arg && typeof arg === 'string') {
         element.innerHTML = arg;
     } else if (arg && typeof arg === 'object') {
   let w = {};
   Object.keys(arg).sort().map(i=>w[i]=arg[i]);
  
          for (const i in w) {
             if (i === 'class') {
              let arr =w[i].split(' ')
                for (let j=0; j<arr.length; j++) {
                  element.classList.add(arr[j])
                }
          } else {
            element[i] = arg[i];
          }
          }
     }
}
     this.result = element;  
  
}
span(...args) {
      
     const element = document.createElement('div');
     for (let arg of args) {
  if (arg && typeof arg === 'string') {
         element.innerHTML = arg;
     } else if (arg && typeof arg === 'object') {
   let w = {};
   Object.keys(arg).sort().map(i=>w[i]=arg[i]);
  
          for (const i in w) {
             if (i === 'class') {
              let arr =w[i].split(' ')
                for (let j=0; j<arr.length; j++) {
                  element.classList.add(arr[j])
                }
          } else {
            element[i] = arg[i];
          }
          }
     }
}
     this.result = element;  
}


br() {
   const element = document.createElement('br');
   this.result = element.outerHTML;
}

toString() {
   return this.result;
}
}
module.exports = function() { 
    return new Templater()
}