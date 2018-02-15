var blackgirl= document.getElementById('blackgirl')
var container= document.getElementById('container')

var girlLeft= 0;

function moveBlackGirl(e){
//when the user presses right arrow, bomber will move right
  if (e.keyCode==39){
      girlLeft+=3;
      blackgirl.style.left = girlLeft + 'px';
  }
//when the user presses left arrow, bomber will move left
else if (e.keyCode==37){
      girlLeft-=3;
      blackgirl.style.left = girlLeft + 'px';
  }
}

document.onkeydown = moveBlackGirl;
document.addEventListener('keydown', function(e) {

});
