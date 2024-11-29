const preloader = document.querySelector('.brain-loader');
const Page = document.querySelector('.Main');
const setup = document.querySelector('.setup');
const answer = document.querySelector('.showAns');
const delivery = document.querySelector('.delivery');
const nextbtn = document.querySelector('.nextmeme');
const apiurl = "./data.json";

window.addEventListener('load' , ()=>{
  setTimeout(()=>{
    preloader.style.display = 'none';
    Page.style.display = 'block';
   } , 3000)
});

let usedIndices = new Set();

async function riddles() {
  const response = await fetch(apiurl);
  var data = await response.json();
 
  if (usedIndices.size === data.length) {
    console.error("No more unique riddles left!");
    return; 
  }

  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * data.length); 
  } while (usedIndices.has(randomIndex));

  usedIndices.add(randomIndex); 
  setup.innerHTML = data[randomIndex].riddle;
  answer.style.display = "block";
  delivery.style.display = "none";

answer.addEventListener("click", function() {
    answer.style.display = "none";
    delivery.style.display = "block";
    delivery.innerHTML = data[randomIndex].answer;
  });
}

answer.addEventListener("click", () => {
  delivery.style.display = 'block';
});

nextbtn.addEventListener("click", () => {
  riddles(); 
});

window.addEventListener("load", () => {
  riddles(); 
});
