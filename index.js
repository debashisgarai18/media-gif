const innerBox1 = document.querySelector(".inner-box1");
const innerBox2 = document.querySelector(".inner-box2");
const innerBox3 = document.querySelector(".inner-box3");
const innerBox4 = document.querySelector(".inner-box4");
const innerBox5 = document.querySelector(".inner-box5");
const innerBox6 = document.querySelector(".inner-box6");
const load = document.getElementById("load");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");

//add onclick
let interval;

// store the current heights
let currHeight1;
let currHeight2;
let currHeight3;
let currHeight4;
let currHeight5;
let currHeight6;

load.addEventListener("click", () => {
  interval = setInterval(() => {
    innerBox1.style.height = `${Math.floor(Math.random() * (50 - 10) + 10)}%`;
    currHeight1 = innerBox1.style.height;
    innerBox2.style.height = `${Math.floor(Math.random() * (70 - 30) + 30)}%`;
    currHeight2 = innerBox2.style.height;
    innerBox3.style.height = `${Math.floor(Math.random() * (100 - 70) + 70)}%`;
    currHeight3 = innerBox3.style.height;
    innerBox4.style.height = `${Math.floor(Math.random() * (100 - 70) + 70)}%`;
    currHeight4 = innerBox4.style.height;
    innerBox5.style.height = `${Math.floor(Math.random() * (70 - 30) + 30)}%`;
    currHeight5 = innerBox5.style.height;
    innerBox6.style.height = `${Math.floor(Math.random() * (50 - 10) + 10)}%`;
    currHeight6 = currHeight5 = innerBox5.style.height;
  }, 100);
});

// to pause
pause.addEventListener("click", () => {
  clearInterval(interval);
  innerBox1.style.height = currHeight1;
  innerBox2.style.height = currHeight2;
  innerBox3.style.height = currHeight3;
  innerBox4.style.height = currHeight4;
  innerBox5.style.height = currHeight5;
  innerBox6.style.height = currHeight6;
});

// to reset
reset.addEventListener("click", () => {
  clearInterval(interval);
  innerBox1.style.height = `0%`;
  innerBox2.style.height = `0%`;
  innerBox3.style.height = `0%`;
  innerBox4.style.height = `0%`;
  innerBox5.style.height = `0%`;
  innerBox6.style.height = `0%`;
});
