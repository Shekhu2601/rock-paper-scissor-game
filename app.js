let rule = document.querySelector(".rule");
let main = document.querySelector(".main");
let next = document.querySelector(".next");
let btnRule = document.querySelector(".btn-rule");
let pick = document.querySelector(".pick-s");
let winner = document.querySelector(".winner-box");
let p = document.querySelector(".p1");

let winr = document.querySelector(".winr");
let wins = document.querySelector(".wins");
let winp = document.querySelector(".winp");
let compPs = document.querySelector(".comp-picks");
let compPp = document.querySelector(".comp-pickp");
let compPr = document.querySelector(".comp-pickr");

let looser = document.querySelector(".looser-box");
let wincr = document.querySelector(".wincr");
let wincs = document.querySelector(".wincs");
let wincp = document.querySelector(".wincp");
let userPs = document.querySelector(".user-picks");
let userPp = document.querySelector(".user-pickp");
let userPr = document.querySelector(".user-pickr");

let drawBox = document.querySelector(".draw-box");
let drawr = document.querySelector(".drawr");
let draws = document.querySelector(".draws");
let drawp = document.querySelector(".drawp");
let drawcr = document.querySelector(".drawcr");
let drawcs = document.querySelector(".drawcs");
let drawcp = document.querySelector(".drawcp");

let bannerBox = document.querySelector(".banner-box");
let scoreS = document.querySelector(".score-board");

// Rules
const showrules = () => {
  rule.classList.remove("hide");
  console.log("click");
};

const cancel = () => {
  rule.classList.add("hide");
};

const playAgain = () => {
  winner.classList.add("hide");
  pick.classList.add("hide");
  main.classList.remove("hide");
  next.classList.add("hide");
  btnRule.classList.remove("sift");
  looser.classList.add("hide");
  drawBox.classList.add("hide");
  bannerBox.classList.add("hide");
  scoreS.classList.remove("hide")
};
const nextbtn = () => {
  winner.classList.add("hide");
  pick.classList.add("hide");
  bannerBox.classList.remove("hide");
  scoreS.classList.add("hide")

};
// main section
let userScore = 0;
let compScore = 0;
let userScoreData = document.querySelector(".user-score-data");
const compScoreData = document.querySelector(".computer-score-data");
//Computer Choice
const genCompChoice = () => {
  const option = ["rock", "paper", "scissor"];
  const randomId = Math.floor(Math.random() * 3);
  return option[randomId];
};

//Winner
const shoWinner = (win, userChoice, compChoice) => {
  if (win) {
    userScore++;
    userScoreData.innerHTML = userScore;
    console.log("win");
    main.classList.add("hide");
    next.classList.remove("hide");
    btnRule.classList.add("sift");
    pick.classList.remove("hide");
    winner.classList.remove("hide");

    drawBox.classList.add("hide");
    if ((userChoice === "rock", compChoice === "scissor")) {
      winr.classList.remove("hide");
      compPs.classList.remove("hide");
      wins.classList.add("hide");
      winp.classList.add("hide");
      compPr.classList.add("hide");
      compPp.classList.add("hide");
    } else if ((userChoice === "scissor", compChoice === "paper")) {
      wins.classList.remove("hide");
      compPp.classList.remove("hide");
      winp.classList.add("hide");
      winr.classList.add("hide");
      compPr.classList.add("hide");
      compPs.classList.add("hide");
    } else if ((userChoice === "paper", compChoice === "rock")) {
      winp.classList.remove("hide");
      compPr.classList.remove("hide");
      wins.classList.add("hide");
      winr.classList.add("hide");
      compPs.classList.add("hide");
      compPp.classList.add("hide");
    }
  } else {
    compScore++;
    compScoreData.innerHTML = compScore;
    console.log("loose!");
    looser.classList.remove("hide");
    main.classList.add("hide");
    drawBox.classList.add("hide");
    pick.classList.remove("hide");
    if ((userChoice === "rock", compChoice === "paper")) {
      wincp.classList.remove("hide");
      userPr.classList.remove("hide");
      wincs.classList.add("hide");
      wincr.classList.add("hide");
      userPs.classList.add("hide");
      userPp.classList.add("hide");
    } else if ((userChoice === "scissor", compChoice === "rock")) {
      wincr.classList.remove("hide");
      userPs.classList.remove("hide");
      wincs.classList.add("hide");
      wincp.classList.add("hide");
      userPr.classList.add("hide");
      userPp.classList.add("hide");
    } else if ((userChoice === "paper", compChoice === "scissor")) {
      wincs.classList.remove("hide");
      userPp.classList.remove("hide");
      wincr.classList.add("hide");
      wincp.classList.add("hide");
      userPs.classList.add("hide");
      userPr.classList.add("hide");
    }
  }
};
//Draw game
const gameDraw = (userChoice, compChoice) => {
  console.log("drwa");
  main.classList.add("hide");
  drawBox.classList.remove("hide");
  pick.classList.remove("hide");
  if ((userChoice === "rock", compChoice === "rock")) {
    drawr.classList.remove("hide");
    drawcr.classList.remove("hide");
    drawcs.classList.add("hide");
    drawcp.classList.add("hide");
    draws.classList.add("hide");
    drawp.classList.add("hide");
  } else if ((userChoice === "scissor", compChoice === "scissor")) {
    draws.classList.remove("hide");
    drawcs.classList.remove("hide");
    drawr.classList.add("hide");
    drawp.classList.add("hide");
    drawcr.classList.add("hide");
    drawcp.classList.add("hide");
  } else if ((userChoice === "paper", compChoice === "paper")) {
    drawp.classList.remove("hide");
    drawcp.classList.remove("hide");
    draws.classList.add("hide");
    drawr.classList.add("hide");
    drawcs.classList.add("hide");
    drawcr.classList.add("hide");
  }
};
// play game
const playGame = (userChoice) => {
  console.log("usreChoice", userChoice);
  const compChoice = genCompChoice();
  console.log("compChoice", compChoice);
  if (userChoice === compChoice) {
    gameDraw(userChoice, compChoice);
  } else {
    let win = true;
    if (userChoice === "rock") {
      //paper scissor
      win = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock scissor
      win = compChoice === "scissor" ? false : true;
    } else {
      //paper scissor
      win = compChoice === "rock" ? false : true;
    }
    shoWinner(win, userChoice, compChoice);
  }
};

let choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
