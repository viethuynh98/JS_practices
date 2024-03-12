function checkSoLe(num) {
  // if (num % 2 === 1) {
  //   return true;
  // }
  // else {
  //   return false;
  // }
  return num % 2 === 1;
}

let checkSoLe_1 = (num) => num % 2 === 1;

// if (checkSoLe_1(6)) {
//   console.log('la so le')
// }
// else {
//   console.log('la so chan')
// }

// chu y ham find() in array
//-----------------------------------------------------------------------------------
var sachs = [
  {
    tacgia: "Harper Lee",
    tieude: "To Kill a Mockingbird",
    namXuatBan: 2020,
    trangthai: true,
  },
  {
    tacgia: "Ray Bradbury",
    tieude: "Fahrenheit 451",
    namXuatBan: 2022,
    trangthai: false,
  },
];

// for (let sach of sachs) {
//   console.log("Tác giả:", sach.tacgia);
//   console.log("Tiêu đề:", sach.tieude);
//   console.log("Năm xuất bản:", sach.namXuatBan);
//   console.log("Trạng thái:", sach.trangthai ? "Đã xuất bản" : "Chưa xuất bản");
//   console.log("--------------");
// }

// for (let item in sachs) {
//   for (let value in sachs[item]) {
//     console.log(value + ":" + sachs[item][value])
//   }
//   console.log('---------------------------');
// }

/* viet ham nhap vao dau vao la 1 mang so, xuat ra 1 so lon nhat va 1 so be nhat theo thu tu nhu vay
vi du: [2, 3, 4, 5] => output: 5, 2

Viet ham nhap vao 1 cau, va tim tu dai nhat trong cau do roi xuat ra.
vi du: Co Thuy dep gai => Thuy.

nhap vao 1 chuoi va xuat ra gia tri reverse cua no

viet ham selection sort
*/
function check(arr) {
  let max = arr[0];
  let min = arr[0];
  for (let i in arr) {
    if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }
  }
  return [max, min];
}
const result = check([2, 3, 4, 5]);
console.log(result);
// arrow function
// const check_1 = (arr) => arr.reduce(([min, max], curr) => [Math.max(min, curr), Math.min(max, curr)], [arr[0], arr[0]]);
// const result_1 = check_1([2, 3, 4, 5]);
// console.log(result_1)

// tim tu dai nhat trong string
let longestWord = (string) => {
  let stringg = string.split(" ");
  let longest = 0;
  let longest_word = null;
  // co the su dung ham forearch
  for (let i = 0; i < stringg.length; i++) {
    if (longest < stringg[i].length) {
      longest = stringg[i].length;
      longest_word = stringg[i];
    }
  }
  return longest_word;
};

console.log(longestWord("lalksdflasd lals alskdf alalks"));

// viet dao nguoc chuoi (reversve)
function reverseString(str) {
  const strRev = str.split("").reverse().join("");
  console.log(strRev);
}

reverseString("HuynhQuocViet");
reverseString("aaaaabbbbb");
reverseString("123456789");

// selection sort

function swap(arr, xp, yp) {
  var temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
}

function selectionSort(arr, n) {
  let min_index;

  for (let i = 0; i < n - 1; i++) {
    min_index = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[min_index]) {
        min_index = j;
      }
    }
    swap(arr, min_index, i);
  }
}

function printArray(arr, size) {
  for (let i = 0; i < size; i++) {
    document.write(arr[i] + " ");
  }
  document.write(" <br>");
}

let arr = [64, 25, 12, 22, 11];
selectionSort(arr, arr.length);
document.write("Sorted array: <br>");
printArray(arr, arr.length);

// arguments:
//-------------------------------------
function plus(x, y) {
  return x + y;
}

document.writeln(plus() + "<br/>");
document.writeln(plus(5) + "<br/>");
document.writeln(plus(5, 7) + "<br/>");
document.writeln(plus(1, 2, 3) + "<br/>");

function plusAll() {
  var res = 0;
  for (var i in arguments) {
    res += arguments[i];
  }
  return res;
}

document.writeln(plusAll(1) + "<br/>");
document.writeln(plusAll(2, 3, 5) + "<br/>");

function func1(a, b, c) {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
}

func1(1, 2, 3);

var person1 = { name: "Nhat Minh", age: 12 };
var person2 = { name: "Huu Trung", age: 32 };

var sayHi = function () {
  alert("Hello " + this.name);
};
var sayBye = function () {
  alert("Goodbye " + this.name);
};
// sayHi.call(person1);
// sayBye.call(person2);
