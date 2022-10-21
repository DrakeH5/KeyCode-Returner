document.addEventListener('keydown', function(event) {
    console.log(event.keyCode)
    document.getElementById("keyCodeH1").innerHTML = event.keyCode;
    document.getElementById("typedDic").innerHTML += " " + event.key;
});

setInterval(function(){
    document.getElementById("typedDic").style.color = randColor()
},1000)

function randColor(){
    return '#'+(0x1000000+Math.random()*0xffffff).toString(16).substr(1,6)
}
