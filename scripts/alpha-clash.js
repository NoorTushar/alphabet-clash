function play() {
   showElementById("gameScreen");
   hideElementById("homeScreen");
   continueGame();
}

function keyUpEventHandler(event) {
   const keyPressed = event.key;

   const expectedAlphabet = document
      .getElementById("alphabetElement")
      .innerText.toLowerCase();

   if (keyPressed === expectedAlphabet) {
      console.log(`great, you win`);

      // update the score
      // 1. get the current score
      const scoreElement = document.getElementById("scoreCounter");
      let currentScore = parseInt(scoreElement.innerText);

      // 2. increment the score
      currentScore = currentScore + 1;
      console.log(currentScore, typeof currentScore);

      // 3. show the updated score
      scoreElement.innerText = currentScore;

      //   continue game
      removeBackgroundColorById(expectedAlphabet, "bg-yellow-400");
      continueGame();
   } else {
      console.log(`sorry you lose`);
      // 1. get the current life
      const lifeElement = document.getElementById("lifeCounter");
      let currentLife = parseInt(lifeElement.innerText);

      // 2. decrement the life
      currentLife = currentLife - 1;

      // 3. show the updated life
      lifeElement.innerText = currentLife;
   }
}

document.addEventListener("keyup", keyUpEventHandler);

function continueGame() {
   // step-01: generate a random alphabet
   let randomAlphabet = generateRandomAlphabet();
   console.log(randomAlphabet);

   // step-02: show the alphabet on the screen
   const alphabetElement = document.getElementById("alphabetElement");
   alphabetElement.innerText = randomAlphabet;

   // step-03: highlight the alphabet on the keyboard screen as well
   setBackgroundColorById(randomAlphabet, "bg-yellow-400");
}
