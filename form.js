let emaill = document.querySelector(".input-1");
let emailConfimation = document.querySelector(".input-2");
let password = document.querySelector(".input-3");
let passwordConfimation = document.querySelector(".input-4");
let birthDay = document.querySelector(".input-5");
let monthBirthDate = document.querySelector(".input-6");
let yearOfBirth = document.querySelector(".input-7");
let dangerText = document.querySelector(".danger-1");
let dangerText2 = document.querySelector(".danger-2");
let dangerText3 = document.querySelector(".danger-3");
let dangerText4 = document.querySelector(".danger-4");
let dangerText5 = document.querySelector(".danger-5");
let dangerText6 = document.querySelector(".danger-6");
let dangerText7 = document.querySelector(".danger-7");
let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const ValidateEmail = () => {
  if (regex.test(emaill.value) !== true) {
    alert(
      "You have entered an invalid email address! In order to continue the registration process you have to enter a valid email address!"
    );
    dangerText.classList.add("danger-input");
  } else dangerText.classList.remove("danger-input");
};
const ValidateEmail2 = () => {
  if (emailConfimation.value !== emaill.value) {
    alert("Your email does not match");
    dangerText2.classList.add("danger-input");
  } else dangerText2.classList.remove("danger-input");
};
