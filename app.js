let cardFront = document.querySelector(".envelope-front");
let cardBack = document.querySelector(".envelope-back");
let para = document.querySelector(".para");
let cardTop = document.querySelector(".top");
let letter = document.querySelector(".letter");
let letterFront = document.querySelector(".front");


function createConfetti() {
    for (var i = 0; i < 100; i++) {
      var confetti = document.createElement('div');
      confetti.classList.add('confetti');
      confetti.style.left = Math.random() * 99 + 'vw';
      confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
      document.body.appendChild(confetti);
    }
}

createConfetti();

cardFront.addEventListener("click", () => {
    cardFront.style.transform = "rotateY(180deg)";
    cardBack.style.transform = "rotateY(0)";
    para.innerText ="Click on the letter to read more..";
    setTimeout(() => {
        cardTop.style.transform = "rotateX(160deg)";
        letter.style.transform = "translateY(-100px)";
        letter.style.zIndex = "2";
    }, 600)
})

letter.addEventListener("click", () => {
    window.location.assign("message.html");
})

letterFront.addEventListener("click", () => {
    window.location.assign("message.html");
})

