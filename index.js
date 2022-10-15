document.addEventListener('keydown', function(event) {
    console.log(event.keyCode)
    document.getElementById("keyCodeH1").innerHTML = event.keyCode;
});
