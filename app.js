var min = 0
var sec = 0
var msec = 0
var a = document.getElementById('msec')
var b = document.getElementById('sec')
var c =document.getElementById('min')
var interval;
function start(){
 interval= setInterval(function(){
    msec++
a.innerHTML= msec
if(msec>=100){
    sec++
    b.innerHTML=sec
    msec=0}
    else if(sec>=60){
        min++
        c.innerHTML=min
        sec=0
    }
},10)
document.getElementById('b1').disabled=true
}
function stop(){
clearInterval(interval)
document.getElementById('b1').disabled=false
}
function reset(){
    min=0
sec=0
msec=0
a.innerHTML=min
b.innerHTML=sec
c.innerHTML=msec
}