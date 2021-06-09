const changeText = () => {
  const p = document.getElementById("demo");

  p.textContent = "I changed because of our event handling property! Wowee!";
}
const button = document.querySelector('button');
button.onclick = changeText;

let saladIngredients = ["lettuce", "baby spinach", "red onion", "tomatoes", "grilled chicken", "shredded cheese"];

function displayList() {
  for (let saladIngredient of saladIngredients) {
    console.log(saladIngredient);
  }
}

function displayForLoop(){
  for (let i = 0; i < 5; i++) {
    console.log(i); }
}

const flower = {
  species: "hibiscus",
  color: "yellow",
  numberOfPetals: 5,
  stateFlower: "Hawaii"
}
function displayInLoop(){
for (attribute in flower) {
  console.log(`${attribute}`.toUpperCase() + `: ${flower[attribute]}`);
}
}


function first() {
  console.log(1)
}

function second(callback) {
  setTimeout(() => {
    console.log(2);

    // Execute the callback function
    if (callback) {
      callback();
  }
  }, 0)
}

function third() {
  console.log(3)
}

function callBackExample(){
  first();
  second(third());
  third();
}
const date = ['1970', '12', '01'];
const [year, month, day] = date;
function destructuredArray(){
console.log(month);
console.log(year);
console.log(day);
}