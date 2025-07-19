let menuBtn = document.querySelector(".hamberger-menu-btn");
let menuContent = document.querySelector(".hamberger-menu-content");
let menuBtnReturn = document.querySelector(".hidden-menu-btn");
let hiddenItem = document.querySelector(".hidden-item");
let hiddenContent = document.querySelector(".hidden-dropdown");
let tabItem = document.querySelector(".tab-item");
let tabContent = document.querySelector(".dropdown-menu");
let tabItem2 = document.querySelector(".another-tab-item");
let tabContent2 = document.querySelector(".dropdown-menu2");
let langBtn = document.querySelector(".bi-three-dots-vertical");
let langContent = document.querySelector(".dropdown-text");




menuBtn.addEventListener("click", function () {
  menuContent.style.display = "block";
  menuBtn.style.display = "none";
  menuBtnReturn.style.display = "flex";

});

menuBtnReturn.addEventListener("click", function () {
  menuContent.style.display = "none";
  menuBtnReturn.style.display = "none";
  menuBtn.style.display = "inline-flex";
});

hiddenItem.addEventListener("click", function () {
  if (hiddenContent.style.display === "none") {

    hiddenContent.style.display = "flex"
  }
  else {
    hiddenContent.style.display = "none"
  }



})
tabItem.addEventListener("click", function () {
  if (tabContent.style.display === "none") {

    tabContent.style.display = "block"
  }
  else {
    tabContent.style.display = "none"
  }
})
tabItem2.addEventListener("click", function () {
  if (tabContent2.style.display === "none") {

    tabContent2.style.display = "block"
  }
  else {
    tabContent2.style.display = "none"
  }
})
langBtn.addEventListener("click", function () {
  if (langContent.style.display === "none") {

    langContent.style.display = "block"
  }
  else {
    langContent.style.display = "none"
  }
})

let slider = document.querySelectorAll(".app-row-body")
slider.forEach(document => {
  let prev = document.querySelector(".move-button-left");
  let next = document.querySelector(".move-button-right");
  let slide = document.querySelectorAll(".app-row-body-content div");
  let slides = document.querySelector(".app-row-body-content");

index = 0;

let showSlides = (i) => {
  if (i < 0) {
    index = 0;
  }
  else if (i >= slide.length) {
    index = 0;
  }
  else if (i > 5) {
    index = 5;
  }

  else {
    index = i;
  }
  slides.style.transform = `translatex(-${index * 10}rem)`
}



prev.addEventListener("click", () => {
  showSlides(index - 1);
});
next.addEventListener("click", () => {
  showSlides(index + 1);
});
showSlides(index);
});