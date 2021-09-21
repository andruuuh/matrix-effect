// Get the main container element
const matrix = document.querySelector(".matrix-animation");
const w = 20;
const h = 35;

// Function for generating a random character
function makeId() {
  let result = "";

  // Characters that can be randomly picked
  // You can add anything you like
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789あぁかさたなはまやゃらいぃきしちにひみりうぅくすつぬ;+-/#~!@^&*";

  // Returning a random character
  result += characters.charAt(Math.floor(Math.random() * characters.length));
  return result;
}

function generateText() {
  // Looping through all columns
  for (let i = 0; i < w; i++) {
    //Adding a random timeout delay for each column
    const timeout = Math.floor(Math.random() * 10) * 1000;

    let delay = 0;

    // Create the columns
    const column = document.createElement("p");

    // Loop through all rows
    for (let i = 0; i < h; i++) {
      // Create the rows
      const letter = document.createElement("span");

      // Generate a random character and add it to the span / row
      letter.innerHTML = makeId();

      // Add the spans / rows to one column
      column.appendChild(letter);

      // Delay each character animation by 100 miliseconds
      // This creates the rain drop effect
      delay += 100;
      column.children[i].style.animationDelay = delay + "ms";
    }

    // Delay each column by a random number of seconds
    setTimeout(() => {
      matrix.appendChild(column);
    }, timeout);
  }

  // Change characters
  changeChars();
}

function changeChars() {
  // Change random amount of character
  setInterval(() => {
    // Get all spans
    const allSpans = document.querySelectorAll("span");

    // Randomize the amount of chars to be changed
    const rCharsAmount = Math.floor(Math.random() * (allSpans.length / 5));

    // Interchange random character with random new character
    for (let i = 0; i < rCharsAmount; i++) {
      const rSpan = Math.floor(Math.random() * allSpans.length);
      allSpans[rSpan].innerHTML = makeId();
    }
  }, 100);
}

generateText();
