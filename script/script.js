// add class navbarDark on navbar scroll
const header = document.querySelector(".navbar");
console.log(header);
window.onscroll = function () {
  const top = window.scrollY;
  if (top >= 100) {
    header.classList.add("navbarDark");
  } else {
    header.classList.remove("navbarDark");
  }
};
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll(".nav-item");
const menuToggle = document.getElementById("navbarSupportedContent");

navLinks.forEach((l) => {
  l.addEventListener("click", () => {
    new bootstrap.Collapse(menuToggle).toggle();
  });
});

function startDate() {
  var d = new Date();
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  document.querySelector(".date").innerHTML =
    days[d.getDay()] +
    " | " +
    d.getDate() +
    " " +
    months[d.getMonth()] +
    " " +
    d.getFullYear();
}
startDate();
