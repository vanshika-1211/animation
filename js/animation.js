<script>
let tID
function animateWalk(){
  const imgCount=8;
  const totWidth=680px;
  let position=totWidth/imgCount;
  const interval=200;
  const diff=totWidth/imgCount;
  tID=setInterval(()=>{
    document.getElementById('image').style.backgroundPosition='-${position}px 0px';
    if(position<totWidth){
      position=position+diff;
    }
    else {
      position=totWidth/imgCount;
    }
  },interval)
}
</script>
