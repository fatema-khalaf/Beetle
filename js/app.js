// //Movement Animation to happen
// const card = document.querySelector(".card");
// const container = document.querySelector(".container");
// //Items
// const title = document.querySelectorAll(".title");
// // const labelWelcome = document.querySelector('.welcome');
// const labelWelcome = document.querySelector(".welcome");

const btnleft = document.querySelector(".btn-left");
const btnright = document.querySelector(".btn-right");
const btnIcon = document.querySelector(".btn__icon");
const btntext = document.querySelector(".btn__text");
const left = document.querySelector(".left");
const leftImg = document.querySelector(".left__img");
const leftHeading = document.querySelector(".left__content__heading");
const leftFigure = document.querySelector(".left__content__figure");
const figureContent = document.querySelector(".left__content__figure--content");
const figureChart = document.querySelector(".left__content__figure--chart");
const leftTitle = document.querySelector(".left__content__figure--title");
const fill = document.querySelectorAll(".fill");
const icons = document.querySelector(".icons");
var ctx = document.getElementById("myChart"); // node

const right = document.querySelector(".right");
const iconsRight = document.querySelector(".icons__right");
const rightImg = document.querySelector(".right__img-green");
const rightHeading = document.querySelector(".right__content__heading");
const rightFigure = document.querySelector(".right__content__figure");
const btnrightIcon = document.querySelector(".btn-right__icon");
const rightTitle = document.querySelector(".right__content__figure--title");
const rightfigureContent = document.querySelector(
  ".right__content__figure--content"
);
const rightfigureChart = document.querySelector(
  ".right__content__figure--chart"
);

//Moving Animation Event
// container.addEventListener("mousemove", (e) => {
//   let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
//   let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
//   card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
// });
//Animate In
// title.forEach((t) =>
//   t.addEventListener("mouseenter", (e) => {
//     console.log(t);
//     t.style.transform = "translateY(-100px) rotateX(180deg)";

//     //t.style.opacity = 0;
//   })
// );
btnleft.addEventListener("click", (e) => {
  //btn.style.transition = "all 5s ease";
  e.preventDefault();
  left.classList.toggle("left--click");
  icons.classList.toggle("icons--click");
  btnleft.classList.toggle("btn--click");
  btnIcon.classList.toggle("btn__icon--click");
  btntext.classList.toggle("btn__text--click");
  leftTitle.classList.toggle("left__content__figure--title--click");
  leftHeading.classList.toggle("left__content__heading--click");
  leftFigure.classList.toggle("left__content__figure--click");
  figureContent.classList.toggle("left__content__figure--content--click");
  figureChart.classList.toggle("left__content__figure--chart--click");
  leftImg.classList.toggle("left__img--click");
});

// //Animate Out
// container.addEventListener("mouseleave", (e) => {
//   card.style.transition = "all 0.5s ease";
//   card.style.transform = `rotateY(0deg) rotateX(0deg)`;
//   //Popback
//   title.style.transform = "translateZ(0px)";
//   sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
//   description.style.transform = "translateZ(0px)";
//   sizes.style.transform = "translateZ(0px)";
//   purchase.style.transform = "translateZ(0px)";
// });
btnright.addEventListener("click", (e) => {
  btnright.style.transition = "all 5s ease";
  e.preventDefault();
  //  left.style.display = "none";
  right.classList.toggle("right--click");
  iconsRight.classList.toggle("icons__right--click");
  btnright.classList.toggle("btn--click");
  btnrightIcon.classList.toggle("btn-right__icon--click");
  btntext.classList.toggle("btn__text--click");
  rightTitle.classList.toggle("right__content__figure--title--click");
  rightHeading.classList.toggle("right__content__heading--click");
  rightFigure.classList.toggle("right__content__figure--click");
  rightfigureContent.classList.toggle("right__content__figure--content--click");
  rightfigureChart.classList.toggle("right__content__figure--chart--click");
  rightImg.classList.toggle("right__img-green--click");
});
fill.forEach((el) => {
  el.style.height = el.innerText;
});
