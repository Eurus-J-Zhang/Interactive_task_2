// Used to log all actions of the user

$("#A").prop("checked", true);

function fn1(){
    window.location="../2_M/index.html";
}

function preventBack() { window.history.forward(); }  
setTimeout("preventBack()", 0);  
window.onunload = function () { null }; 