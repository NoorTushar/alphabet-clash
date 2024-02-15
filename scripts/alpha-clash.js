function play() {
   // hide and show the screens
   hideElementById("homeScreen");
   hideElementById("scoreScreen");
   showElementById("gameScreen");

   // reset score and life
   setTextElementValueById("lifeCounter", 5);
   setTextElementValueById("scoreCounter", 0);

   continueGame();
}

function gameOver() {
   hideElementById("gameScreen");
   showElementById("scoreScreen");
}

function keyUpEventHandler(event) {
   const keyPressed = event.key;

   const expectedAlphabet = document
      .getElementById("alphabetElement")
      .innerText.toLowerCase();

   if (keyPressed === expectedAlphabet) {
      /**
       *  update the score

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
       */

      // doing same things above but using function:

      // 1. get the current score
      const currentScore = getTextElementValueById("scoreCounter");

      // 2. increment the score
      const updatedScore = currentScore + 1;

      // 3. show the updated score
      setTextElementValueById("scoreCounter", updatedScore);

      //continue the game
      removeBackgroundColorById(expectedAlphabet, "bg-yellow-400");
      continueGame();
   } else {
      // 1. get the current life
      currentLife = getTextElementValueById("lifeCounter");

      // 2. decrement the life
      const updatedLife = currentLife - 1;

      // 3. show the updated life
      setTextElementValueById("lifeCounter", updatedLife);

      if (updatedLife === 0) {
         gameOver();
      }
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
