function hideElementById(elementId) {
   const element = document.getElementById(elementId);
   element.classList.add("hidden");
}

function showElementById(elementId) {
   const element = document.getElementById(elementId);
   element.classList.remove("hidden");
}

function setBackgroundColorById(elementId, color) {
   const alphabetElement = document.getElementById(elementId);
   alphabetElement.classList.add(color);
}

function removeBackgroundColorById(elementId, color) {
   const alphabetElement = document.getElementById(elementId);
   alphabetElement.classList.remove(color);
}

function getTextElementValueById(elementId) {
   const element = document.getElementById(elementId);
   const value = parseInt(element.innerText);
   return value;
}

function setTextElementValueById(elementId, value) {
   const element = document.getElementById(elementId);
   element.innerText = value;
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
