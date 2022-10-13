// Used to log all actions of the user

function fn1(){
    window.location="../1_M/index.html"; 
}

function preventBack() { window.history.forward(); }  
setTimeout("preventBack()", 0);  
window.onunload = function () { null }; 
