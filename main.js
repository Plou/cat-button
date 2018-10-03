var $catImg = document.querySelector('#cat-img')
var $refreshButton = document.querySelector('#refresh-cat')

var getCategories = function () {
  return fetch('https://api.thecatapi.com/v1/categories?api_key=MzM1MDk2', {mode: "cors"})
  .then((data) => data.json())
}

var getCat = function (category) {
  return fetch(`https://api.thecatapi.com/v1/images/search?api_key=MzM1MDk2&category_ids=${category}`, {mode: "cors"})
  .then((data) => data.json())
  .then((data) => data[0].url )
}

getCategories()
  .then((categories) => {
    var category = categories[Math.floor(Math.random() * categories.length)]
    console.log(category.name)
    return category.id
  })
  .then((category) => {
    getCat(category)
      .then((url) => {
        $catImg.setAttribute('src', url)
      })
    $refreshButton.addEventListener('click', (e) => {
      e.preventDefault()
      getCat(category)
        .then((url) => {
          $catImg.setAttribute('src', url)
        })
    })
  .catch(console.log)
})
