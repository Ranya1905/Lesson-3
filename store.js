var removeCartItemButtons = document.getElementsByClassName('btn-danger')
console.log(removeCartItemButtons)
for (var i = 0; i< removeCartItemButtons.lenght; i++){
  var button = removeCartItemButtons[i]
  button.addEventListener('click',function(event) {
      var buttonClicked = event.target
      buttonClicked.parentElement.parentElement.remove()
  })
}