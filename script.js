const colors = ['red', 'yellow', 'blue', 'green', 'indigo', 'violet'];
let pickedColor = "";
let attempts = 5;

const countMsg = document.getElementById("guess");
const select = document.getElementById("select");
const message = document.createElement("p");

document.querySelector(".container").appendChild(message);

function pickColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  pickedColor = colors[randomIndex];

  attempts = 5;
  message.textContent = "";
  countMsg.textContent = "You have 5 attempts left";
  
}

document.addEventListener("keydown", (e) => {
  if (e.key === "F12") {
    console.log("The color is ", pickedColor);
  }
});


function btn() {
  let guess = select.value.trim().toLowerCase();

  if (guess === "none" || guess === "") {
    message.textContent = "❗ Please choose a color.";
    return;
  }

  if (guess === pickedColor) {
    message.textContent = "🎉 Correct! You guessed it!";
    countMsg.textContent = "You win!";
    return;
  }

  if (attempts > 0) {
    message.textContent = "❌ Wrong guess. Try again!";
    countMsg.textContent = `You have ${attempts} attempts left`;
  } else {
    message.textContent = `💀 Game over! The color was "${pickedColor}".`;
    countMsg.textContent = "No attempts left";
  }

  select.classList.remove("correct", "wrong");

  if (guess === pickedColor) {
    message.textContent = "🎉 Correct! You guessed it!";
    countMsg.textContent = "You win!";
    select.classList.add("correct");


    setTimeout(() => {
      select.classList.remove("correct");
    }, 800);

  return;
  }


  attempts--;
  select.classList.add("wrong");

  setTimeout(() => {
    select.classList.remove("wrong");
  }, 600);  


} 



function newG() {
  select.value = "none";
  pickColor();
}

 
pickColor();


