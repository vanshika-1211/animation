startbtn.addEventListener("click", function(){
man.style.webkitAnimation = "walk 2s steps(8) infinite";
man.style.webkitAnimation = "forward 12s linear infinite";
bg.style.webkitAnimation = "bg 50s linear infinite";
});
stopbtn.addEventListener("click", function(){
  man.style.webkitAnimation = "";
  man.style.webkitAnimation = "";
  bg.style.webkitAnimation = "";
});
