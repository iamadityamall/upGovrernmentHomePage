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

// slide show
let slideIndex = 0;
showSlides();

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides1((slideIndex = n));
}

function showSlides1(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 8000); // Change image every 8 seconds
}
