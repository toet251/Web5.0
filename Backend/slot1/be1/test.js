/* Javascript data type*/
//number
let i = 1;
let pi = 3.14;

//string
let s = 'test'

//boolean
let b = true;

//null
let n = null;

//undefined
let n1 = undefined;


/* Object and function*/
//object
let student = {
  name : 'Son',
  age : 17
};

student.age = 27;
student.grade = 1;

//create an object in ES5
let studentB = new function () {
  this.name = 'name',
  this.age = 12
}

//function
let test = () => {
  console.log('function 2');
}
test();

//function as a variable
let foo = () => {
  console.log('foo');
}

let bar = (func) => {
  func();
}

bar(foo);

// operator    (== / ===)
let a1 = 11;
let a2 = '11';
console.log(a1 === a2);
console.log(a1 == a2);

