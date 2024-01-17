var accounts = [
  {
    "email": "abc@gmail.com",
    "password": "1234qweradsf!"
  },
  {
    "email": "3120221121@ued.udn.vn",
    "password": "zxcvasdfqwer!"
  },
  {
    "email": "viethuynh98@gmail.com",
    "password": "220321923aye!"
  },
  {
    "email": "18011998@gmail.com",
    "password": "chuyensinhcaptoc!"
  },
  {
    "email": "aaasssddd@gmail.com",
    "password": "qweasdzxc123!"
  },
];

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const passwordRegex = /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-])[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]{10,}$/;

function isValidEmail(email) {
  return emailRegex.test(email);
}

function isValidPassword(password) {
  return passwordRegex.test(password);
}

function validateEmail() {
  const emailInput = document.getElementById("email").value;
  const emailValidationMessage = document.getElementById("emailValidationMessage");

  if (isValidEmail(emailInput)) {
    emailValidationMessage.innerText = "Email hợp lệ";
  } else {
    emailValidationMessage.innerText = "Email không hợp lệ";
  }
}

function validatePassword() {
  const passwordInput = document.getElementById("password").value;
  const passwordValidationMessage = document.getElementById("passwordValidationMessage");

  if (isValidPassword(passwordInput)) {
    passwordValidationMessage.innerText = "Mật khẩu hợp lệ";
  } else {
    passwordValidationMessage.innerText = "Mật khẩu không hợp lệ";
  }
}

function validateForm() {
  const emailInput = document.getElementById("email").value;
  const passwordInput = document.getElementById("password").value;

  // Kiểm tra email và password với danh sách tài khoản
  const isValidAccount = accounts.some(account => account.email === emailInput && account.password === passwordInput);

  if (isValidEmail(emailInput) && isValidPassword(passwordInput) && isValidAccount) {
    alert("Đăng nhập thành công!");
  } else {
    alert("Email hoặc mật khẩu không đúng. Vui lòng kiểm tra lại.");
  }
}
