let fs = require('fs');

//Doc file dong bo
// let data = fs.readFileSync('test.txt');
// console.log(data.toString());

Doc file bat dong bo
fs.readFile('test.txt', (error, data) => {
  if (error) {
    return console.log(error)
  }
  console.log(data.toString());
})

console.log('end');
