const users = [
  {
    username: "Luca",
    password: "1234",
  },
  {
    username: "Jamie",
    password: "1234",
  },
  {
    username: "Admin",
    password: "admin",
  },
];
let checked = false;
let userMatch = 0;

let checkbox = document.getElementById("fruit1");
let button = document.querySelector("#button-login");
let username = document.querySelector(".email");
let password = document.querySelector(".password");

const login = () => {
  const indexOfUser = users.findIndex(
    (user) => user.username === username.value
  );
  if (indexOfUser !== -1) {
    users[indexOfUser].password === password.value
      ? window.location.assign("/pages/home.html")
      : alert("User not found");
  } else {
    alert("User not found");
  }
};
