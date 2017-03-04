let arr = [
  'string 1',
  3.14,
  {
    name : 'son',
    age : '22'
  }
];

//access element by index
console.log(arr[0]);

//looping array
arr.forEach( (value, index) => {
	console.log(value, index);
})
