var random1 = Math.random() * 6;
random1 = Math.floor(random1) + 1;
random1 = "images/dice" + random1 + ".png";
document.querySelector(".img1").setAttribute("src", random1);

var random2 = Math.random() * 6;
random2 = Math.floor(random2) + 1;
random2 = "images/dice" + random2 + ".png";
document.querySelector(".img2").setAttribute("src", random2);

var title = document.querySelector("h1");

if(random1 === random2){
    title.innerHTML = "DRAW!";
} 
else if(random1 > random2){
    title.innerHTML = "Player 1 Wins!";
} 
else{
    title.innerHTML = "Player 2 Wins!";
}