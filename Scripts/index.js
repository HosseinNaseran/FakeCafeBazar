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
slider.forEach(container => {
  let prev = container.querySelector(".move-button-left");
  let next = container.querySelector(".move-button-right");
  let slide = container.querySelectorAll(".app-row-body-content div");
  let slides = container.querySelector(".app-row-body-content");

  let index = 0;
  let slideWidth = slide[0].offsetWidth
  let current = 0
  let draging = false
  let startM = 0
  let startP = 0

  let showSlides = (i) => {
    if (i <= 0) {
      index = 0;
      prev.style.display = "none";
    }
    else if (i >= slide.length) {
      index = 0;
    }
    else if (i >= 7) {
      index = 7;
      next.style.display = "none";
    }

    else {
      index = i;
      prev.style.display = "flex";
      next.style.display = "flex";
    }
    slides.style.transform = `translatex(-${index * slideWidth}px)`
    current = -index * slideWidth

  }


  prev.addEventListener("click", () => {
    showSlides(index - 1);
  });
  next.addEventListener("click", () => {
    showSlides(index + 1);
  });
  showSlides(index);


  slides.addEventListener("mousedown", (e) => {
    draging = true
    startM = e.pageX
    startP = current
    e.preventDefault();
  })
  document.addEventListener("mousemove", (e) => {
    if (!draging) return;
    let move = e.pageX - startM
    let newX = startP + move
    let maxX = -(slide.length * slideWidth - container.offsetWidth);
    if (newX > 0) newX = 0;
    if (newX < maxX) newX = maxX;
    slides.style.transform = `translatex(${newX}px)`;
    current = newX;
  })
   document.addEventListener("mouseup", function() {
    draging = false;
  })
});


const Alert = " تلاش نکن دانلود نمیشه"
