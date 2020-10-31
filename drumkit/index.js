function func()
{

  var audio;
  var exp=this.innerHTML;
  makeSound(exp);
  buttonAnimation(exp);
  // this.style.color="white";
  // this.style.color="#DA0463";
}
var arr=document.querySelectorAll(".drum");
document.addEventListener('keydown',function(event){
  // makeSound(String.fromCharCode(event.keyCode));
  var str=String.fromCharCode(event.keyCode);
  str=str.toLowerCase();
  makeSound(str);
  buttonAnimation(str);
});
for(var i=0;i<arr.length;i++)
{
  arr[i].addEventListener("click",func);
}


function makeSound(key)
{
  switch (key) {
    case "w":
      audio=new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      audio=new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
      case "s":
        audio=new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
      case "d":
        audio=new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
      case "j":
          audio=new Audio("sounds/snare.mp3");
          audio.play();
          break;
      case "k":
          audio=new Audio("sounds/crash.mp3");
          audio.play();
          break;
      case "l":
        audio=new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;
    default:
        break;
  }
}

function buttonAnimation(currKey)
{
  var activeButton=document.querySelector("."+currKey);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}
