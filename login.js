const users = [
  {
    username: "Luca",
    password: "1234",
  },
];
let userMatch = 0;

let button = document.querySelector("#button-login");
let username = document.querySelector(".email").value;
let password = document.querySelector(".password").value;

const login = () => {
  event.preventDefault();
  for (let i = 0; i < users.length; i++) {
    if (username === users[i].email && password === users[i].password) {
      userMatch++;
    }
  }
  if (userMatch++ > 0) {
    window.location.assign("home.html");
  } else {
    window.location.assign("index.html");
    alert("User does not exist");
  }
};
button.addEventListener("click", login);
