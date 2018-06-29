var $catBox = document.querySelector('#cat-box')
var $refreshButton = document.querySelector('#refresh-cat')
var $cats = ['space', 'hats', 'space', 'funny', 'sunglasses', 'boxes', 'caturday', 'ties', 'dream', 'kittens', 'sinks', 'clothes']
var $cat = $cats[Math.floor(Math.random() * $cats.length)]

$refreshButton.addEventListener('click', (e) => {
  e.preventDefault()
  fetch(`https://thecatapi.com/api/images/get?api_key=MzM1MDk2&format=html&category=${$cat}`)
  .then((data) => data.text())
  .then((img) => $catBox.innerHTML = img)
  .catch(console.log)
})

fetch(`https://thecatapi.com/api/images/get?api_key=MzM1MDk2&format=html&category=${$cat}`)
  .then((data) => data.text())
  .then((img) => $catBox.innerHTML = img)
  .catch(console.log)
