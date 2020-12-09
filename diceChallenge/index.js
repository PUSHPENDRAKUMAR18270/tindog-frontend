var randomNumber1= Math.floor(Math.random()*6)+1;
var image1="images/"+"dice"+randomNumber1+".png";
var arr=document.querySelectorAll("img");
var i=arr[0];
i.setAttribute("src",image1);
randomNumber2=Math.floor(Math.random()*6)+1;
var image2="images/"+"dice"+randomNumber2+".png";
i=arr[1];
i.setAttribute("src",image2);
if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="player 1 wins";
}
else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML="player 2 wins";
}
else{
  document.querySelector("h1").innerHTML="Draw";
}
