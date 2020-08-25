var tID;
var sprite = document.getElementById('man');

function animateScript() {
  bg.style.animation = "bg 50s linear infinite";
  var position = 0;
  const interval = 150;
  const diff = 148;
  tID = setInterval(() => {
    sprite.style.backgroundPosition = `-${position}px 0px`;
    if (position < 1186) {
      position = position + diff;
    } else {
      position = 0;
    }
  }, interval);
}

function stopAnimate() {
  bg.style.animation = "";
  clearInterval(tID);
}
