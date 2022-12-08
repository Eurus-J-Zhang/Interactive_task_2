
function preventBack() { window.history.forward(); }  
setTimeout("preventBack()", 0);  
window.onunload = function () { null }; 

function fn1(){

    var rd1 = document.getElementById("A");
    var rd2 = document.getElementById("B");
    if (rd1.checked == true)
        window.location="../1_F/index.html";
    else if (rd2.checked == true)
        window.location="../1_T/index.html";
}