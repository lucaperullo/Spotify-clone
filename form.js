let emaill = document.querySelector(".input-1");
let emailConfimation = document.querySelector(".input-2").value;
let password = document.querySelector(".input-3").value;
let passwordConfimation = document.querySelector(".input-4").value;
let birthDay = document.querySelector(".input-5").value;
let monthBirthDate = document.querySelector(".input-6").value;
let yearOfBirth = document.querySelector(".input-7").value;
let dangerText = document.querySelector(".writetext-danger");
let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const ValidateEmail = () => {
  if (regex.test(emaill.value) !== true) {
    alert(
      "You have entered an invalid email address! In order to continue the registration process you have to enter a valid email address!"
    );
    dangerText.classList.add("danger-input");
  } else dangerText.classList.remove("danger-input");
};
