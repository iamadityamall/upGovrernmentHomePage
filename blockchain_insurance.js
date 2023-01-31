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

window.addEventListener("load", () => {
  googleTranslate();
});

// google translate
async function googleTranslate() {
  const googleTranslate = document.querySelector(".goog-te-gadget");
  googleTranslate.style.width = "20rem";
  googleTranslate.style.padding = "1rem";

  const parent = document.querySelector(".goog-te-gadget");
  const childs = [];
  for (let i = 0; i < parent.children.length; i++) {
    childs.push(parent.children[i]);
  }

  parent.innerHTML = "";
  parent.appendChild(childs[0]);
  parent.appendChild(childs[1]);
  googleTranslate.removeChild(googleTranslate.children[1]);

  /*
   * parent.innerHTML = ''; childs.forEach((item) =>
   * parent.appendChild(item));
   */

  const childElement = googleTranslate.firstChild;
  const select = childElement.firstChild;
  select.style.padding = "0.25rem";
  select.style.borderRadius = "10px";
  select.style.fontWeight = "bold";
  select.style.border = "2px solid #E8E8E8";

  const googTeCombo = document.querySelector(".goog-te-combo");

  googTeCombo.addEventListener("change", function () {
    const googleDiv = document.querySelector(".skiptranslate");
    console.log(googleDiv);
    googleDiv.style.display = "none";
  });

  const googleDiv = document.querySelector(".skiptranslate");
  console.log(googleDiv);
  googleDiv.style.display = "none";
}
