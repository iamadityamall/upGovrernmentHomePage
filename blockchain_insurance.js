const li = document.querySelectorAll("#li");
const questions = document.querySelectorAll(".faq_question a");
const answers = document.querySelectorAll(".answer_one");
const showButton = document.getElementById("stats_button");
const date = new Date();
let getYear = date.getFullYear();

const year = document.getElementById("year");
year.innerText = `${getYear} Copyright: Developed by IDBI Intech`;




showButton.innerText = "[ + More]";

showButton.addEventListener("click", function () {
  if (this.innerText === "[ + More]") {
    this.innerText = "[ - Less]";
    li.forEach((l) => {
      l.style.display = "grid";
    });
  } else {
    this.innerText = "[ + More]";
    li.forEach((l) => {
      l.style.display = "none";
    });
  }
});

questions.forEach((question) => {
  question.addEventListener("click", function () {
    answers.forEach((answer) => {
      if (question.getAttribute("id") === answer.getAttribute("id")) {
        answer.style.display = "grid";
      } else {
        answer.style.display = "none";
      }
    });
  });
});







const sidebarLinkOne = document.getElementById("linkOne");
const sidebarLinkOneSubmenu = document.getElementById("submenu");
const sidebarLinkOneOne = document.getElementById("linkOne_one");
const sidebarLinkOneTwo = document.getElementById("linkOne_two");
const ulSidebarLinkOneOne = document.querySelector(".sidebarmenu__ulThree");
const ulSidebarLinkOneTwo = document.querySelector(".sidebarmenu__ulFour");
const sidebarButton = document.getElementById("sidebarButton");
const sidebarmenu = document.querySelector(".sidebarmenu");

const oneHeroImage = document.getElementById("one");
const twoHeroImage = document.getElementById("two");
const threeHeroImage = document.getElementById("three");

sidebarButton.addEventListener("click", function () {
  sidebarmenu.classList.toggle("inactive");
});

sidebarLinkOne.addEventListener("click", function () {
  sidebarLinkOneSubmenu.classList.toggle("inactive");
});

sidebarLinkOneOne.addEventListener("click", function () {
  ulSidebarLinkOneOne.classList.toggle("inactive");
});

sidebarLinkOneTwo.addEventListener("click", function () {
  ulSidebarLinkOneTwo.classList.toggle("inactive");
});








