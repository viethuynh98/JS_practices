/*
  Bai tap JS 17/01
*/
var x = 8;
var str = "";
switch (x) {
  case 2:
    str = "Monday";
    break;
  case 3:
    str = "Tuesday";
    break;
  case 4:
    str = "Wednesday";
    break;
  case 5:
    str = "Thursday";
    break;
  case 6:
    str = "Friday";
    break;
  case 7:
    str = "Saturday";
    break;
  case 8:
    str = "Sunday";
    break;
  default:
    str = "Wrong input";
    break;
}

console.log(str);
document.write(str + "<br>");
var arr = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
x = 3;

switch (x) {
  case 2:
    str = arr[0];
    break;
  case 3:
    str = arr[1];
    break;
  case 4:
    str = arr[2];
    break;
  case 5:
    str = arr[3];
    break;
  case 6:
    str = arr[4];
    break;
  case 7:
    str = arr[5];
    break;
  case 8:
    str = arr[6];
    break;
  default:
    str = "Wrong input";
    break;
}

console.log(str);
document.write(str + "<br>");

var value = 3;
function check_snt(x) {
  if (x === 2 || x === 3) {
    return true;
  }
  for (i = 2; i <= Math.sqrt(x); i++) {
    if ((x % 2) === 0) {
      return false;
    }
  }
  return true;
}

if (check_snt(value)) {
  document.write(value + " la so nguyen to <br>");
}


var arr = [[1, 1, 0], [1, 0, 1], [0, 1, 1], [0, 0, 0]];

for (i = 0; i < arr.length; i++) {
  for (j = 0; j < arr[i].length; j++) {
    document.write(arr[i][j] + " ");
  }
  document.write("<br>");
}


const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passwordRegex = /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{10,}$/;

function isValidEmail(email) {
  return emailRegex.test(email);
}

// Sử dụng hàm isValidEmail để kiểm tra địa chỉ email
const emailToCheck = "example@example.edu";
if (isValidEmail(emailToCheck)) {
  console.log("Email hợp lệ.");
} else {
  console.log("Email không hợp lệ.");
}



function isValidPassword(password) {
  return passwordRegex.test(password);
}

// Sử dụng hàm isValidPassword để kiểm tra mật khẩu
const passwordToCheck = "StrongPwd123!";
if (isValidPassword(passwordToCheck)) {
  console.log("Accepted Password");
} else {
  console.log("Wrong Password");
}

//(1) kiem tra structure cua username + password
//(2) kiem tra account da ton tai hay chua
// username: var user = {user: "", pw: ""}

//tao form dien  (kiem tra onkey)
//submit: kiem tra structure 1 lan nua + kiem tra account co ton tai hay khong