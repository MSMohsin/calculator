

function getNumber(num){
    var inp = document.getElementById("inp");
    inp.value += num;
}

function clearbtn(){
    var inp = document.getElementById("inp");
    inp.value = ""
}



function getOutput(){
    var inp = document.getElementById("inp");
    inp.value = eval(inp.value);
}