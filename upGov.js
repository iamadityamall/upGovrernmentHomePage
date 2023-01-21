const sidebarLinkOne = document.getElementById("linkOne");
const sidebarLinkOneSubmenu = document.getElementById("submenu");
const sidebarLinkOneOne = document.getElementById("linkOne_one");
const sidebarLinkOneTwo = document.getElementById("linkOne_two");
const ulSidebarLinkOneOne = document.querySelector(".sidebarmenu__ulThree");
const ulSidebarLinkOneTwo = document.querySelector(".sidebarmenu__ulFour");

const sidebarButton = document.getElementById("sidebarButton");
const sidebarmenu = document.querySelector(".sidebarmenu");

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
