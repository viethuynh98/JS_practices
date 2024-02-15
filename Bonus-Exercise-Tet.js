// 1: toan tu 3 ngoi
let toanTuBaNgoi = false;
if (choice) {
  const x = 100;
  let result;
  if (x < 1000) {
    result = "nho hon 1000";
  } else {
    result = "lon hon hoac bang 1000";
  }
} else {
  const x = 100;
  const result = x < 1000 ? "nho hon 1000" : "lon hon hoac bang 1000";
}
//------------------------------------------------------------
// 2: shorthand evaluated -- (falsy - truthy)
let variable1;
let variable2;
if (variable1 !== null || variable1 !== undefined || variable1 !== '') {
  variable2 = variable1;
} else {
  variable2 = "";
}
// or
const variable3 = variable1 || "";

//------------------------------------------------------------
// 3: variable declaration - If comparison
let x;
let y;
let z = 3;
// or let x, y, z = 3;
let isTurnOn = true;
if (isTurnOn == true){

}
//or
if (isTurnOn) {

}
//------------------------------------------------------------
// 4: for loop - for loop with decimal base
let sampleArr = [1, 2, 3, 4, 5, 6, 7];
for (let i = 0; i < sampleArr.length; i++) {
  console.log(sampleArr[i]);
}
//or
for(let item in sampleArr) {
  console.log(item);
}

for (let i = 0; i < 100000; i++) {
  console.log(1);
}
//or
for (let i = 0; i < 1e5; i++) {
  console.log(2);
}
//NOTE: 1e0 === 1; 1e1 === 10; 1e2 === 100; 1e3 = 1000; 1e4 = 10000; 1e5 = 100000

//------------------------------------------------------------
// 5: Object property
const a = 1, b = 2;
const obj = {x: x, y: y};
//if key_name = variable_name
const obj1 = {x, y};

//------------------------------------------------------------
// 6: using arrow function to shorten function definition
function sayHello(name) {
  console.log('Hello ', name);
}
let sayHello_02 = name => console.log('Hello ', name);

setTimeout(function() {
  console.log('Loaded');
}, 2000);
setTimeout(() => console.log('Unloaded'), 2000);

sampleArr.forEach(function(item) {
  console.log(item);
})
sampleArr.forEach(item => console.log(item));

//implicit return (an return di bang arrow function)
function getValue(ratio) {
  return ratio * 6.9;
}

let getValue = ratio => ratio * 6.9

//------------------------------------------------------------
// 7: set default value for parameter in function
function getValue(a, b, c) {
  if (a === undefined) {
    a = 3;
  }
  if (b === undefined) {
    b = 4;
  }
  return a * b + c;
}

let getValue_01 = (a, b = 3, c = 4) => (a * b + c);

//------------------------------------------------------------
// 8: template list
let firstName = "Viet";
let lastName = "Huynh";
const welcome = 'You have logged in as ' + firstName + ' ' + lastName + '.';
const welcome_02 = `You have logged in as ${firstName} ${lastName}.`;

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit \n\t'
  + 'Phasellus eu turpis vel augue porta blandit. \n\t'
  + 'Etiam lectus sem, feugiat sed ultricies eget, dictum ac dui. \n\t'
  + 'Pellentesque eget felis magna. Maecenas viverra feugiat lectus id cursus.\n\t'

const lorem_02 = `Lorem ipsum dolor sit amet, consectetur
adipiscing elit. Phasellus eu turpis vel augue porta blandit. 
Etiam lectus sem, feugiat sed ultricies eget, dictum ac dui. 
Pellentesque eget felis magna. Maecenas viverra feugiat lectus id cursus.`

//------------------------------------------------------------
// 9: Destructuring Assignment

// const action = require('lib/action')
// const service = require('lib/service')

// const form = this.props.form;
// const errors = this.props.errors;
// const entity = this.props.entity;
// const controller = this.props.controller;
// const component = this.props.component;

//=> ES module
import { action, service } from 'lib';
const {form, errors, entity, controler, component } = this.props;

//------------------------------------------------------------
// 10: Spread Operator (...)

//joining array
const odd = [1, 3, 5];
const nums = [2, 4, 6].concat(odd);
const nums_02 = [2, 4, 6, ...odd];
const nums_03 = [2, ...odd, 4, 6];

// cloning arrays
const arr = [1, 2, 3, 4]
const arr2 = arr.slice();
const arr3 = [...arr];

//------------------------------------------------------------
// 11: Constraint Param
function sample(param1) {
  if (param1 = undefined) {
    throw new Error('Thieu tham so');
  }
  return param1;
}

let mandatory = () => { throw new Error('Thieu tham so'); }
let sample_01 = (param1 = mandatory()) => param1;

//------------------------------------------------------------
// 12: Find() in arrays
const employees = [
  {name: 'Emp A', age: 25},
  {name: 'Emp B', age: 28},
  {name: 'Emp C', age: 35}
]

function findEmp(name) {
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].name === name) {
      return employees[i];
    }
  }
}

const name = 'Emp A'
emp = findEmp(name)
//or
const nameB = 'Emp B'
emp = employees.find(item => item.name === name)

//------------------------------------------------------------
// 13: Object[key]
function validate(fullName) {
  if (!fullName.firstName) {
    return false;
  }
  if (!fullName.lastName) {
    return false;
  }
  return true;
}

console.log(validate({firstName: 'Duy', lastName: 'Buffet'}));

const rule = {
  firstName: {
    required: true
  },
  lastName: {
    required: true
  }
}

const validate_02 = (rule, values) => {
  for (prop in rule) {
    if (rule[prop].required) {
      if (!values[prop]) {
        return false;
      }
    }
  }
  return true;
}

console.log(validate_02(rule, {firstName: 'Duy'}));
console.log(validate_02(rule, {firstName: 'Duy', lastName: 'Buffet'}));

//------------------------------------------------------------
// 14: Bitwise NOT double
if (Math.floor(6.9) === 6) {
  console.log(true)
}
if (~~6.9 === 6) {
  console.log(true)
}
