// camel case 
// title.style.border = '1px solid black'
//500 - мілісекунди
const title = document.querySelector('h1')
function blink() {
    // якщо в елемента немає класу "ред" - воно додає цей класс
    // якщо в елемента є цей клас "ред" - він видаляє цей класс
    // title.classList.toggle('red');
    // title.classList.toggle('green');
    // title.classList.toggle('yellow');

    // if (title.style.color === 'red') {
    //     title.style.color = 'black'
    // } else {
    //     title.style.color = 'red'
    // }
   const colors = ['red', 'green', 'yellow', 'blue', 'grey']

 function randomInteger(min, max) {
  // получить случайное число от (min-0.5) до (max+0.5)
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}
const randomNumber = randomInteger(0,4)
const randomColor = colors[randomNumber]

title.style.color = randomColor

}
setInterval(blink, 2000)

const buttonShowText = document.querySelector('button')
const text = document.querySelector('p')

function showText () {
    if(text.style.display === 'block') {
        text.style.display = 'none'
        buttonShowText.textContent = "Показати текст"
    } else {
    setTimeout(()=> {
        text.style.display = 'block'
        buttonShowText.textContent = "Приховати текст"
    }, 300)
    }
}

buttonShowText.addEventListener('click',showText)