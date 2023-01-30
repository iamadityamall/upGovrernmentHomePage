// window.onscroll = function() {
//     scrollFunction()
// };

// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     document.getElementById("navbarMain").style.top = "0";
//   } else {
//     document.getElementById("navbarMain").style.top = "0";
//   }
// }

const productLink = document.getElementById("products_link");
const submenu = document.getElementById("products_link_submenu");

productLink.addEventListener("mouseover", function () {
  submenu.style.display = "grid";
});

submenu.addEventListener("mouseover", function () {
  this.style.display = "grid";
});

submenu.addEventListener("mouseout", function () {
  this.style.display = "none";
});

const sidebarButton = document.getElementById("sidebarButton");

const sidebar = document.getElementById("sidebar");

const closeSidebar = document.getElementById("closeSidebar");

const productsLinksidebar = document.querySelector(".products_container");

const submenuProduct = document.querySelector(".products_links_sidebar");

const insurance = document.getElementById("insurance");
const ekyc = document.getElementById("ekyc");

const productsLinkInsurance = document.querySelector(
  ".products_link_submenu_insurance"
);
const productsLinkEkyc = document.querySelector(".products_link_submenu_ekyc");

insurance.addEventListener("mouseover", function () {
  productsLinkInsurance.style.display = "grid";
  productsLinkEkyc.style.display = "none";
});

ekyc.addEventListener("mouseover", function () {
  productsLinkEkyc.style.display = "grid";
  productsLinkInsurance.style.display = "none";
});

productsLinkEkyc.addEventListener("mouseover", function () {
  submenu.style.display = "grid";
});

productsLinkInsurance.addEventListener("mouseover", function () {
  submenu.style.display = "grid";
});

/*productsLinkEkyc.addEventListener("mouseout", function(){
	submenu.style.display = "none";
});

productsLinkInsurance.addEventListener("mouseout", function(){
	submenu.style.display = "none";
});*/

productsLinksidebar.addEventListener("click", function () {
  submenuProduct.style.display = "grid";
});

closeSidebar.addEventListener("click", function () {
  sidebar.style.transform = "translateX(100%)";
  submenuProduct.style.display = "none";
});

sidebarButton.addEventListener("click", function () {
  sidebar.style.transform = "translateX(0)";
});
