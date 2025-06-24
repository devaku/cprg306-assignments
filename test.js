console.log('RUNNING TEST');

let mystring = '1234abc 🥛🍞🥚🍌🥦🍗';
// 🥛🍞🥚🍌🥦🍗

const regex = /([A-Za-z0-9]+)/g;
let found = mystring.charAt(mystring.length - 1).match(regex);
console.log(found);
console.log('EXIT');
