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

const slides = document.querySelectorAll(".slide");
let curSlide = 0;

slides.forEach((slide, index) => {
  slide.style.transform = `translateX(${index * 100}%)`;
});

oneHeroImage.addEventListener("click", function () {
  slides[0].style.display = "grid";
  slides[1].style.display = "none";
  slides[2].style.display = "none";
});

twoHeroImage.addEventListener("click", function () {
  slides[0].style.display = "none";
  slides[1].style.display = "grid";
  slides[2].style.display = "none";
});

threeHeroImage.addEventListener("click", function () {
  slides[0].style.display = "none";
  slides[1].style.display = "none";
  slides[2].style.display = "grid";
});

const date = new Date();
let getYear = date.getFullYear();

const year = document.getElementById("year");
year.innerText = `${getYear} Copyright: Developed by IDBI Intech`;

console.log(getYear);
