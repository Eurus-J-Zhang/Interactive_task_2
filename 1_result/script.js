// Used to log all actions of the user
function preventBack() { window.history.forward(); }  
setTimeout("preventBack()", 0);  
window.onunload = function () { null }; 

const tsk1_time = localStorage.getItem('task2_time');
document.getElementById("demo").innerHTML = tsk1_time/1000;

const t_times = localStorage.getItem('t_times');
document.getElementById("true_times").innerHTML = t_times;

function fn1(){
    window.location="https://link.webropolsurveys.com/S/08093AFF94B018ED";
    // const d = new Date();
    // const start_time = d.getTime();
    // localStorage.setItem('start_time',start_time);
}

// To reset the parameters
// localStorage.setItem('t_times',0);
// localStorage.setItem('task1_time',0);

