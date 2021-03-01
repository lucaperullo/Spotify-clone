const captcha = document.getElementById("fake-captcha");

const passOrFail = function () {
  const pass = Math.round(Math.random());
  return pass ? "pass" : "fail";
};

captcha.onclick = function () {
  if (captcha.className.includes("loading")) return;

  captcha.className = "";

  captcha.className += "loading";

  setTimeout(function () {
    captcha.className = captcha.className.replace("loading", "");
    captcha.className += passOrFail();
  }, Math.floor(Math.random() * 3000 + 1000));
};
