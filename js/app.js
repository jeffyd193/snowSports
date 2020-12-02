$(document).ready(function(){

	$('#nav-icon3').click(function(){

        $(this).toggleClass('open');
    $('.container').toggleClass('hide');
    $('.container').toggleClass('show');
  
	});
});

(function() {
  const pictures = [
    "ski1",
    "ski2",
    "board1",
    "board2",
    "snowmobile1"
  ];

  //select both left and right button. Add event listeners
  const buttons = document.querySelectorAll('.btn')
  console.log(buttons)
  const imageDIV = document.querySelector('.content')
  console.log(imageDIV)
  let counter = 0

  buttons.forEach(function(button){
    button.addEventListener('click', function(e){
      if (button.classList.contains('leftBtn')){
        counter--
        if(counter < 0){
          counter = pictures.length -1
        }
        imageDIV.style.backgroundImage = `url('./img/${pictures[counter]}.jpg')`
      }
      if (button.classList.contains('rightBtn')){
        counter++
        if(counter > pictures.length -1){
          counter = 0
        }
        imageDIV.style.backgroundImage = `url('./img/${pictures[counter]}.jpg')`
      }
    })
  })
})();
