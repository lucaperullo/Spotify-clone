const navColorOnScroll = () => {
  let navbar = document.getElementById("navbuttons-top");
  const main = document.getElementById("main");
  const horizontalScroll = main.scrollTop == true;
  const middle = main.scroll;
  if (horizontalScroll !== true) {
    navbar.style.backgroundColor = "#13161998";
  }
  console.log(horizontalScroll);
};

const displayDropdown = () => {
  let dropdown = document.querySelector(".dropdown-log");
  if (dropdown.style.display !== "block") {
    dropdown.style.display = "block";
  } else if (dropdown.style.display !== "none") {
    dropdown.style.display = "none";
  }
};
const removeGradient = () => {
  let navbar = document.querySelector(".navbar");
  navbar.style.backgroundImage =
    "linear-gradient(rgba(185, 75, 179, 0), #131518)";
};
const changeBackgroundColor = () => {
  let navbar = document.querySelector(".navbar");
  colors = [
    "linear-gradient(rgba(185, 75, 179, 0.24), #131518)",
    "linear-gradient(rgba(185, 75, 75, 0.24), #131518)",
    "linear-gradient(rgba(238, 202, 202, 0.322), #131518)",
    "linear-gradient(rgba(46, 107, 165, 0.24), #131518)",
    "linear-gradient(rgba(46, 165, 159, 0.24), #131518)",
    "linear-gradient(rgba(46, 165, 76, 0.24), #131518)",
    "linear-gradient(rgba(104, 165, 46, 0.24), #131518)",
    "linear-gradient(rgba(165, 153, 46, 0.24), #131518)",
    "linear-gradient(rgba(165, 117, 46, 0.24), #131518)",
    "linear-gradient(rgba(11, 17, 92, 0.363), #131518)",
    "linear-gradient(rgba(92, 11, 52, 0.719), #131518)",
  ];
  navbar.style.opacity = "0";
  navbar.style.backgroundImage =
    colors[Math.floor(Math.random() * colors.length)];
  setTimeout(function () {
    navbar.style.opacity = "1";
  }, 500);
};
