const apiurl = "https://riddles-api.vercel.app/random";

const answer = document.querySelector('.showAns');
const nextbtn = document.querySelector('.nextmeme');
const setup = document.querySelector('.setup');
const delivery = document.querySelector('.delivery');

async function riddles() {
  const response = await fetch(apiurl);
  
  var data = await response.json();
  setup.innerHTML = data.riddle;

  answer.style.display = "block";
  delivery.style.display="none";
  console.log(data);
  console.log("vaibhav");

  answer.addEventListener("click", function() {
    answer.style.display = "none";
    delivery.style.display = "block";
    delivery.innerHTML = data.answer;
});
// delivery.style.display = "none";
  

}

answer.addEventListener("click", () => {
  delivery.style.display='block';
});

nextbtn.addEventListener("click", () => {
  riddles();
});

window.addEventListener("load", () => {
    riddles();
});

// @Again leaving for 7 months bye! ( today 6/11/24)