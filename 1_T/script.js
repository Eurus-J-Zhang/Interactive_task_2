// Used to log all actions of the user
// window.onbeforeunload = function() { return "Your work will be lost."; };

function preventBack() { window.history.forward(); }  
setTimeout("preventBack()", 0);  
window.onunload = function () { null }; 
$("#A").prop("checked", true);

function fn1(){
    window.location="../2_M/index.html";
}


let t_n = localStorage.getItem('t_times');
t_n = Number(t_n) + 1;
localStorage.setItem('t_times',t_n);