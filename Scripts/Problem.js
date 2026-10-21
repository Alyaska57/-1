const flag = document.getElementById( "calculate");
flag.addEventListener("click", calculate);
function calculate(){
    document.getElementById("Z").value=1/(Number(document.getElementById("X").value)*Number(document.getElementById("Y").value));
}