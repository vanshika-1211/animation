var tID
function animateWalk(){
  const imgCount=8;
  const totWidth=1186;
  let position=totWidth/imgCount;
  const interval=200;
  const diff=totWidth/imgCount
  tID=setInterval(()=>{
    document.getElementsByClassName('man').style.background='-${position}px 0px';
    if(position<totWidth){
      position=position+diff;
    }
    else{
      position=totWidth/imgCount;
    }
  },interval);
}
function stopAnimate{
  clear(tID);
}
