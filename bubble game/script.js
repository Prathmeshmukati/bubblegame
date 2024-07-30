var timer = 60;
var score = 0;
var match =0;

function inscore(){
   score += 10;
  document.querySelector("#scoreup").textContent = score;
}
inscore();



function hit(){
   match = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = match;
}
hit();

function createbubble(){
    var clutter = " ";
 for(var i=0;i<=299;i++){
  var a =  Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${a}</div>` ; }
document.querySelector("#pbtm").innerHTML = clutter; 
}
createbubble();

document.querySelector("#pbtm").addEventListener("click",function(detail){
var num = (Number(detail.target.textContent));
if(match === num){
    inscore();
    createbubble();
    hit();
}
})

function runtimer (){
   var t = setInterval(function(){
        if(timer>0){
         timer--;
         document.querySelector("#tim").textContent = timer;
    }else{
        clearInterval(t);
        document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER </h1>`;
    }
    },1000)
}
runtimer();

