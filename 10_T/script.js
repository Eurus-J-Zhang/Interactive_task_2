// Used to log all actions of the user
// alert("Error!! There seems to be some problems with the system.");
$("#A").prop("checked", true);

function fn1(){

    const s_time = localStorage.getItem('start_time')
    const d = new Date();
    let e_time = d.getTime();
    const t_dff = e_time - s_time;
    localStorage.setItem('task2_time',t_dff);
    
    window.location="../1_result/index.html";
}

function preventBack() { window.history.forward(); }  
setTimeout("preventBack()", 0);  
window.onunload = function () { null }; 

// calculate the correct answers.
let t_n = localStorage.getItem('t_times');
t_n = Number(t_n) + 1;
localStorage.setItem('t_times',t_n);