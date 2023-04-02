
// changing first image

let randomNumber1=Math.floor(Math.random()*6)+1;
let randomImage1="images/dice"+randomNumber1+".png";
let image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImage1);

//changing secong image

let randomNumber2=Math.floor(Math.random()*6)+1;
let randomImage2="images/dice"+randomNumber2+".png";2
let image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage2);

// deciding a winner

if(randomNumber1>randomNumber2){

    document.querySelector("h1").innerHTML="Player1 Wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player2 Wins!";
}
else{
    document.querySelector("h1").innerHTML="It's a Draw!";
}