let socket = io()
let messages = document.querySelector('section ul')
let input = document.querySelector('input')


// the chatbox
document.querySelector('form').addEventListener('submit', event => {
  event.preventDefault()
  if (input.value) {
    socket.emit('message', input.value)
    input.value = ''
  }
})

var character = new Array ("/images/amongus.webp", "/images/charmander.png", "/images/dino.png", "/images/dory.png", "/images/flappy.png", "/images/iron.png", "/images/kirby.png", "/images/link.png", "/images/minecraft.webp", "/images/kirby.png", "/images/minion.png", "/images/pacman.png", "/images/perry.png", "/images/rainbowcat.png", "/images/rat.png", "/images/ray.webp", "/images/sonic.png", "/images/stitch.png", "/images/mushu.png", "/images/yoda.png", "/images/pucca.png")


socket.on('message', message => {
  var elem = document.createElement('img');
  var characters  = document.querySelector("#characters");
  var randomize = Math.floor(Math.random() * character.length);
  elem.src = character[randomize];
  characters.appendChild(elem);
  messages.appendChild(Object.assign(document.createElement('li'), { textContent: message }))
  messages.scrollTop = messages.scrollHeight
})

socket.on('users', message => {
  character = message;
  // console.log(message);
})

// // getting a random character

// window.onload  = pickCharacter
// // var randomize = Math.floor(Math.random() * character.length);

// var character = new Array ("/images/amongus.webp", "/images/charmander.png", "/images/dino.png", "/images/dory.png", "/images/flappy.png", "/images/iron.png", "/images/kirby.png", "/images/link.png", "/images/minecraft.webp", "/images/kirby.png", "/images/minion.png", "/images/pacman.png", "/images/perry.png", "/images/rainbowcat.png", "/images/rat.png", "/images/ray.webp", "/images/sonic.png", "/images/stitch.png")

// function pickCharacter() {
//   document.getElementById("character").src = character[randomize];
// } 
