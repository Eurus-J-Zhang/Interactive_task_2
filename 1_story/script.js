// Used to log all actions of the user

function fn1(){
    window.location="../6_M/index.html";
}


// let f_n = 0;
// localStorage.setItem('t_times',f_n);

function preventBack() { window.history.forward(); }  
setTimeout("preventBack()", 0);  
window.onunload = function () { null }; 