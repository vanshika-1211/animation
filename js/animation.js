startbtn.addEventListener("click", function(){
  man.style.animation = "walk 2s steps(8) infinite";
  man.style.animation = "forward 12s linear infinite";
  bg.style.animation = "bg 50s linear infinite";
});
stopbtn.addEventListener("click", function(){
  man.style.animation = "";
  man.style.animation = "";
  bg.style.animation = "";
});
