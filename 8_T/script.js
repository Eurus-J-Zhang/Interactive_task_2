// Used to log all actions of the user
$("#B").prop("checked", true);

function fn1(){
    window.location="../9_M/index.html";
}

function preventBack() { window.history.forward(); }  
setTimeout("preventBack()", 0);  
window.onunload = function () { null }; 

// calculate the correct answers.
let t_n = localStorage.getItem('t_times');
t_n = Number(t_n) + 1;
localStorage.setItem('t_times',t_n);