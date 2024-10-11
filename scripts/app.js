const correctNumberEle = document.querySelector(".correct-num");
const numberInput = document.querySelector("#numberInput");
const checkBtn = document.querySelector(".check-btn");
const againBtn = document.querySelector(".again-btn");
const scoreEle = document.querySelector(".score");
const highScoreEle = document.querySelector(".high-score");
const message = document.querySelector(".message");
const clickEventName = "click";

let currentScore = 20;
let targetNumber;

(function () {
  targetNumber = generateNumber();
  addClickEventForBtn(checkBtn, clickEventName, handleCheckEvent);
  addClickEventForBtn(againBtn, clickEventName, handleAgainEvent);
})();

function generateNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

function addClickEventForBtn(ele, eventName, func) {
  ele.addEventListener(eventName, func);
}

function handleCheckEvent() {
  valueAsNum = Number(numberInput.value);
  if (!valueAsNum) {
    updateMessage("⛔NOT A Number⛔");
  } else if (valueAsNum && currentScore > 0) {
    if (valueAsNum > targetNumber) {
      updateMessage("To High 📈");
      decreaseScore();
      updateScore();
    } else if (valueAsNum < targetNumber) {
      updateMessage("To Low 📉");
      decreaseScore();
      updateScore();
    } else if (valueAsNum === targetNumber) {
      updateMessage("Correct Number🎉🎉🎉");
      showTargetNumber();
    }
  }
}

function handleAgainEvent() {
  currentScore = 20;
  updateScore();
  updateMessage("Start Guessing ...");
  clearInput();
  hideTargetNumber();
  targetNumber = generateNumber();
}

function updateMessage(msg) {
  message.textContent = msg;
}

function updateScore() {
  scoreEle.textContent = currentScore;
}

function showTargetNumber() {
  correctNumberEle.textContent = targetNumber;
}

function clearInput() {
  numberInput.value = "";
}

function hideTargetNumber() {
  correctNumberEle.textContent = "?";
}

function decreaseScore() {
  currentScore--;
}
