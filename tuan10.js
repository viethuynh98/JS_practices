//-------------this----------------
// var student = {
//   name: 'Mai Ha Thi',
//   getName: function() {
//     console.log(this.name);
//     return this.name;
//   }
// }
// var _deStudent = student.getName();
//---------------------scope chain--------------
// var te;
// function step1 () {
//   console.log(te);
// }

// function step2 () {
//   te = 2;
//   step1();
// }
// step2();
// var te = 'sdfsdfsdfsdf'
//--------------------------scopes, call() - apply()----------
// var person1 = { name: "Nhat Minh", age: 12 };
// var person2 = { name: "Huu Trung", age: 32 };

// var sayHi = function () {
//   alert("Hello " + this.name);
// };
// var sayBye = function () {
//   alert("Goodbye " + this.name);
// };
// sayHi.call(person1);
// sayBye.call(person2);
//-------------------------bind-------------------------
// var t = 5;
// var checkNumbericRange = function (value) {
//   if (typeof value !== 'number') {
//     return false;
//   }
//   else {
//     return value >= this.minimum && value <= this.maximum;
//   }
// }
// var range = {
//   minimum: 10,
//   maximum: 20
// }

// var boundCheckNumericRange = checkNumbericRange.bind(range);

// var result = boundCheckNumericRange(12);

// document.write(result);

//------------------------Curry-----------------------------
// function add(a, b, c) {
//   return a + b + c;
// }

// console.log(add(1, 2, 3));
// //---
// function addCurries(a) {
//   return (b) => {
//     return (c) => {
//       return a + b + c;
//     }
//   }
// }

// console.log(addCurries(1)(2)(3));
// //---
// const ad1 = addCurries(1);
// const ad2 = ad1(2);
// const ad3 = ad2(3);

// console.log(ad3);

//--------------------Nested_function, Lexical Scope-----------------------
// function fOuter() {
//   var x = "Hello";
//   function fInner() {
//     x = "World"
//   }
//   fInner();
//   return x;
// }

// document.write(fOuter());

// var name = 'sss';
// var myFunction = function () {
//   var name = 'Ha Thi';
//   var myOtherFunction = function () {
//     console.log('I am ' + name);
//   };
//   console.log(name);
//   myOtherFunction();
// }

// myFunction();
//--------------------- closure ------------------
// var sayBye = function(name) {
//   var text = 'Bye, ' + name;
//   return () => {
//     console.log(text);
//   }
// }

// var callBye = sayBye('Me');
// callBye();

// let t = 5;
// console.log(this.t);

//--------------------functional inheritance--------------
// function square(width) {
//   var squareObject = {};
//   squareObject.width = width;
//   squareObject.getArea = function () {
//     if (width > 0) {
//       return width * width;
//     }
//   }
//   return squareObject;
// }

// var myBox = square(5);
// document.write(myBox.getArea() + "<br/>");
// document.write(myBox.width + "<br/>");

// function cube(width) {
//   var cubeObject = square(width);
//   var squareArea = cubeObject.getArea;
//   cubeObject.getVolume = function () {
//     if (width > 0) {
//       return squareArea() * width;
//     }
//   }
//   cubeObject.getArea = function () {
//     if (width > 0) {
//       return squareArea() * 6;
//     }
//   }
//   return cubeObject;
// }

// var myCube = cube(5);
// document.write(myCube.getVolume() + "<br/>");
// document.write(myCube.getArea() + "<br/>");

//----------------Constructors and new--------------
// function Rect(x, y, w, h) {
//   this.w = w;
//   this.h = h;
//   this.x = x;
//   this.y = y;
// }

// var rect = new Rect(5, 5, 1, 1);
// console.log(rect.constructor.name);
// console.log(rect.constructor.prototype);
// console.log(rect.w);

// class Rect {
//   constructor(x, y, w, h) {
//     this.w = w;
//     this.h = h;
//     this.x = x;
//     this.y = y;
//   }
// }

//-----------functional inheritance with class ---------------
// class square {
//   constructor(width) {
//     this.width = width;
//   }

//   getArea() {
//     console.log(`Square of this ${this.width * this.width}`);
//     return this.width * this.width;
//   }
// }

// class cube extends square {
//   constructor(width) {
//     super(width);
//   }

//   squareArea = this.getArea();

//   getVolume() {
//     console.log(`Volume of this ${this.squareArea * this.width}`);
//     return this.squareArea * this.width;
//   }
// }

// var myCube = new cube(5);
// myCube.getVolume();

//btvn -- 37 -- 50
// function Constructor(val) {
//   this.properties_2 = "bubble";
//   this.properties_3 = val;
// }

// var obj = new Constructor("bub");
// alert(obj.properties_3);





//_______________________________________________________________________________________________________________________________
//---------------------bt-----------------
// page 36:
// class Rect {
//   constructor(x, y, w, h) {
//     this.w = w;
//     this.h = h;
//     this.x = x;
//     this.y = y;
//   }

//   calcArea() {
//     return this.w * width;
//   }
// }
//________________________________________________________________
//page 50:
// function Car() {}

// Car.prototype = {
//   constructor: Car,
//   speed: 0,
//   printSpeed: function () {
//     document.write(this.speed + "<br/>");
//   },
// };

/*
Dòng code constructor: Car trong đoạn mã của bạn là cách cổ điển để thiết lập lại tham chiếu đến hàm constructor cho đối tượng được tạo ra thông qua prototype.
Khi bạn thiết lập Car.prototype = { ... }, bạn đang ghi đè toàn bộ đối tượng prototype của Car bằng một đối tượng mới.
Khi bạn xác định một thuộc tính constructor trong đối tượng prototype, điều này giúp đối tượng mới tạo ra thông qua hàm constructor đó (ví dụ: new Car()) giữ nguyên tham chiếu đến chính hàm constructor.
Nói cách khác, nếu bạn không có dòng code constructor: Car, thì Car.prototype.constructor sẽ trở thành một hàm mặc định được tạo ra tự động, và nó có thể không trỏ đúng vào hàm constructor của Car.
*/

// var car = new Car();
// car.instanceMethod = function () {
//   document.write("An instance method <br/>");
// };

// car.speed = 50;
// car.printSpeed();
// car.instanceMethod();

// function Cabriolet() {}

// Cabriolet.prototype = new Car();
// Cabriolet.prototype.topState = "closed";
// Cabriolet.prototype.openTop = function () {
//   this.topState = "opened";
//   document.write("Top: " + this.topState + "<br/>");
// };
// Cabriolet.prototype.closeTop = function () {
//   this.topState = "closed";
//   document.write("Top: " + this.topState + "<br/>");
// };
// var cabriolet = new Cabriolet();
// cabriolet.speed = 120;
// cabriolet.printSpeed();
// cabriolet.openTop();
// cabriolet.closeTop();

// function TeslaCabriolet () {}

// TeslaCabriolet.prototype = new Cabriolet();
// TeslaCabriolet.prototype.name = "Tesla http://www.teslamotors.com/roadster";
// TeslaCabriolet.prototype.sayName = function () {
//   document.write(this.name + "<br/>");
// }

// var tesla = new TeslaCabriolet();
// tesla.openTop();
// tesla.sayName();

//___________________chuyen sang cu phap cua class:___________________
class Car {
  constructor() {
    this.speed = 0;
  }

  printSpeed() {
    document.write(this.speed + "<br/>");
  }
}

class Cabriolet extends Car {
  constructor() {
    super();
    this.topState = "closed";
  }

  openTop() {
    this.topState = "opened";
    document.write("Top: " + this.topState + "<br/>");
  }

  closeTop() {
    this.topState = "closed";
    document.write("Top: " + this.topState + "<br/>");
  }
}

class TeslaCabriolet extends Cabriolet {
  constructor() {
    super();
    this.name = "Tesla http://www.teslamotors.com/roadster";
  }

  sayName() {
    document.write(this.name + "<br/>");
  }
}

var car = new Car();
car.speed = 50;
car.printSpeed();

var cabriolet = new Cabriolet();
cabriolet.speed = 120;
cabriolet.printSpeed();
cabriolet.openTop();
cabriolet.closeTop();

var tesla = new TeslaCabriolet();
tesla.openTop();
tesla.sayName();

//________________________________________________________________

class Pet {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  introduce() {
    console.log(`Toi ten la ${this.name}`);
  }

  talk() {
    console.log(this.sound);
  }
}

class Dog extends Pet {
  constructor(name, sound, type) {
    super(name, sound);
    this.type = type;
  }

  introduce() {
    super.introduce();
  }

  dogType() {
    console.log(`toi la dong vat ${this.type}`);
    this.introduce();
    super.talk();
  }
}

var aaa = new Dog(`Lucky`, `Roar Roar`, `4 chan`);
aaa.dogType();

// su dung ham o tren, tim so chan trong 1 mang, co su dung callback trong mang.
// tìm số chẵn trong mảng sử dụng callback function
let numArr = [12, 51, 25, 26, 82, 90, 24];

let evenNumbers = numArr.filter(function(element) {
  return element % 2 === 0;
});

console.log(`so chan co trong mang la: [${evenNumbers}]`);
