function play() {
   showElementById("gameScreen");
   hideElementById("homeScreen");
   continueGame();
}

function continueGame() {
   // step-01 generate a random alphabet
   let randomAlphabet = generateRandomAlphabet();
   console.log(randomAlphabet);
}

function generateRandomAlphabet() {
   const alphabets = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
   ];

   //total 26 alphabets
   // 0-25 index
   let randomIndex = Math.floor(Math.random() * alphabets.length);

   let randomAlphabet = alphabets[randomIndex];
   return randomAlphabet;
}
