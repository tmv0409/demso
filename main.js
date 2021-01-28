var clear;
var getValue = function(){
    var number = document.getElementById('number').value;
    number++;
    if(number==500){
        number = 0;
    }
    document.getElementById('number').value = number;
}
function start(){
    clear =  setInterval(getValue, 1);
}
function stop(){
    clearInterval(clear);
    var score = document.getElementById('number').value;
    alert("your score is: "+score);
    document.getElementById('number').value = 0;
}