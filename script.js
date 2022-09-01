
function clickButton(val){
    console.log(val)
    document.getElementById("result-screen").value=document.getElementById("result-screen").value +val;

}

function clearScreen(){
    document.getElementById("result-screen").value="";
}

function equalClick(){
    var text=document.getElementById("result-screen").value;
    var result=eval(text)
    document.getElementById("result-screen").value=result;

}