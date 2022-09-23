

//  变量声明
let btn = document.getElementById("btn");
let body = document.querySelector("body");
body.style.backgroundColor = "rgb(11, 27, 35)";
let clock = document.getElementById("clock");
let circle = document.getElementsByClassName("circle");
let digit = document.getElementById("numBox");
let number = document.querySelectorAll(".number");
let stick = document.getElementsByClassName("stick");

//   日间/夜晚效果 
btn.childNodes[1].addEventListener("click", function () {
  let isColor = body.style.backgroundColor;
  if (isColor == "rgb(11, 27, 35)") {
    this.style.color = "tomato";
    this.style.textShadow = "1px 1px 20px 20px tomato";
    this.setAttribute("class", "fa fa-sun-o");
    day();
  }
  else {
    this.style.color = "gold";
    this.style.textShadow = "1px 1px 20px 20px gold";
    this.setAttribute("class", "fa fa-moon-o");
    night();
  }
});

//  day function
function day() {
  body.style.backgroundColor = "rgb(221, 224, 231)";
  clock.classList.add("clockDay");
  clock.classList.remove("clockNight");
  digit.childNodes[1].style.color = "rgba(255, 99, 71, 0.8)";
  digit.childNodes[7].style.color = "rgba(255, 99, 71, 0.8)";
  digit.childNodes[13].style.color = "rgba(255, 99, 71, 0.8)";
  digit.childNodes[19].style.color = "rgba(255, 99, 71, 0.8)";

  for (j = 0; j < circle.length; j++) {
    circle[j].style.boxShadow = "0 0 1.5px rgb(163, 163, 163)  inset";
  }
}

//  night function
function night() {
  body.style.backgroundColor = "rgb(11, 27, 35)";
  clock.classList.remove("clockDay");
  clock.classList.add("clockNight");
  digit.childNodes[1].style.color = "rgba(0, 255, 255, 0.7)";
  digit.childNodes[7].style.color = "rgba(0, 255, 255, 0.7)";
  digit.childNodes[13].style.color = "rgba(0, 255, 255, 0.7)";
  digit.childNodes[19].style.color = "rgba(0, 255, 255, 0.7)";

  for (j = 0; j < circle.length; j++) {
    circle[j].style.boxShadow = "0 0 1.5px #000 inset";
  }
}
night();  // night active manual

//  clock`s number digit set in position
for (i = 0; i < number.length; i++) {
  let rotate = 30 * number[i].childNodes[0].innerHTML;
  number[i].style.transform = "translate(-50%, -100%) rotate(" + rotate + "deg)";
  number[i].childNodes[0].style.transform = "rotate(-" + rotate + "deg)";
}

//  time function / stick rotate according to time
function time() {
  let date = new Date();
  let s = date.getSeconds();
  let m = date.getMinutes();
  let h = date.getHours();

  let sec = stick[2];
  let min = stick[1];
  let hou = stick[0];

  let secR = 6*s;
  let minR = 6*m + 6*s / 60;
  let houR = 30*h + m/2;

  sec.style.transform = " translate(-50%, -90%) rotate(" + secR + "deg)";
  min.style.transform = " translate(-50%, -90%) rotate(" + minR + "deg)";
  hou.style.transform = " translate(-50%, -90%) rotate(" + houR + "deg)";
}
setInterval(time, 1000); //   reapeat time using interval