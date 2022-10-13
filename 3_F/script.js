// Used to log all actions of the user
$("#A").prop("checked", true);

function fn1(){
    // var rd1 = document.getElementById("A");
    // var rd2 = document.getElementById("B");
    // if (rd1.checked == true)
    window.location="../4_M/index.html";
    // else if (rd2.checked == true)
        // window.location="../page5/index.html";
}

function preventBack() { window.history.forward(); }  
setTimeout("preventBack()", 0);  
window.onunload = function () { null }; 

let f_n = localStorage.getItem('f_times');
f_n = Number(f_n) + 1;
localStorage.setItem('f_times',f_n);