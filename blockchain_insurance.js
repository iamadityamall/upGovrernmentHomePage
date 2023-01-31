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
