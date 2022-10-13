// Used to log all actions of the user

function fn1(){
    const d = new Date();
    const start_time = d.getTime();
    localStorage.setItem('start_time',start_time);
    window.location="../0_story/index.html";
}
function preventBack() { window.history.forward(); }  
setTimeout("preventBack()", 0);  
window.onunload = function () { null }; 


localStorage.setItem('t_times',0);
localStorage.setItem('task1_time',0);

