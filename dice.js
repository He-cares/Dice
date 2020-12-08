var rand1= (Math.floor(Math.random()*6))+1;
var randice1= "images/dice"+ rand1 + ".png";
var dice1 = document.querySelectorAll("img")[0];
dice1.setAttribute("src", randice1);

var rand2= (Math.floor(Math.random()*6))+1;
var randice2= "images/dice"+ rand2 + ".png";
var dice2 = document.getElementById("img2");
dice2.setAttribute("src", randice2);

if (rand1>rand2)
{
    document.querySelector('h1').innerHTML = "<em>Player 1 wins</em> ";
}
else if (rand1<rand2)
{
    document.querySelector('h1').innerHTML = "Player 2 wins ";
}
else
{
    document.querySelector('h1').textContent = "You draw ";
}