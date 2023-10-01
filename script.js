const block = document.querySelectorAll(".block");
const spent = document.querySelectorAll(".spent");
const spentNum = document.querySelectorAll(".spent-num");
const balNum = document.querySelector(".bal-num");
const tolNum = document.querySelector(".total-num");

let datas;
let amuArr = [];
let totalSpentInWeek = null;

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    // &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    // console.log(data);
    data.forEach((amu) => {
      amuArr.push(amu.amount);
      totalSpentInWeek = eval(amuArr.join("+", ""));
      //   console.log(totalSpentInWeek);

      for (let i = 0; i < block.length; i++) {
        window.addEventListener("load", () => {
          block[i].style.height = `${
            (data[i].amount * totalSpentInWeek) / 100
          }px`;
          if (parseFloat(block[i].style.height) > 100) {
            block[i].style.backgroundColor = "var(--Cyan)";
          }
        });
      }

      for (let i = 0; i < block.length; i++) {
        block[i].addEventListener("mouseenter", () => {
          spent[i].style.transform = "translateY(0px)";
          spentNum[i].textContent = data[i].amount;
        });

        block[i].addEventListener("mouseleave", () => {
          spent[i].style.transform = "translateY(-1800px)";
        });
      }
    });
    // ****************************************
  });

// year final outcome
const targetNumber = 921.48;
const increment = 10;
let currentBal = 0;

let interval = setInterval(() => {
  currentBal += increment;
  balNum.textContent = currentBal;

  if (currentBal >= targetNumber) {
    balNum.textContent = targetNumber;
    clearInterval(interval);
  }

  if (balNum.textContent == "--") {
    clearInterval(interval);
  }
}, 50);

const targetTotal = 478.33;
const incrementT = 5;
let currentTol = 0;

let intervalT = setInterval(() => {
  currentTol += incrementT;
  tolNum.textContent = currentTol;

  if (currentTol >= targetTotal) {
    tolNum.textContent = targetTotal;
    clearInterval(intervalT);
  }

  if (tolNum.textContent == "--") {
    clearInterval(intervalT);
  }
}, 50);
