// Used to log all actions of the user

function fn1(){
    var rd1 = document.getElementById("A");
    var rd2 = document.getElementById("B");
    if (rd1.checked == true)
        window.location="../5_T/index.html";
    else if (rd2.checked == true)
        window.location="../5_F/index.html";    
}

function preventBack() { window.history.forward(); }  
setTimeout("preventBack()", 0);  
window.onunload = function () { null }; 