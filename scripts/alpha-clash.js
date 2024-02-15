function play() {
   showElementById("gameScreen");
   hideElementById("homeScreen");
   continueGame();
}

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
