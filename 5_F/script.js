// Used to log all actions of the user
// alert("Error!! There seems to be some problems with the system.");
$("#A").prop("checked", true);

function fn1(){

    const s_time = localStorage.getItem('start_time')
    const d = new Date();
    let e_time = d.getTime();
    const t_dff = e_time - s_time;
    localStorage.setItem('task1_time',t_dff);

    window.location="../0_result/index.html";
}

function preventBack() { window.history.forward(); }  
setTimeout("preventBack()", 0);  
window.onunload = function () { null }; 