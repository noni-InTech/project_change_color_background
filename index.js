const body = document.querySelector('body');
const button = document.querySelector('button')
const colors = ["blue", "red", "orange", "green", "purple"]
 button.addEventListener('click', changeColor)
function changeColor(){
let colorIndex = parseInt(Math.random()*colors.length)
body.style.backgroundColor = colors[colorIndex];
}

console.log("color changer");