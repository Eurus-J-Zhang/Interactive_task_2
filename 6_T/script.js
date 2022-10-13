// Used to log all actions of the user
$("#B").prop("checked", true);

function fn1(){
    window.location="../7_M/index.html";
}

function preventBack() { window.history.forward(); }  
setTimeout("preventBack()", 0);  
window.onunload = function () { null }; 

let f_n = 1;
localStorage.setItem('t_times',f_n);