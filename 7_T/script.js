// Used to log all actions of the user
// alert("Error!! There seems to be some problems with the system.");
$("#A").prop("checked", true);

function fn1(){
    // var rd1 = document.getElementById("A");
    // var rd2 = document.getElementById("B");
    // if (rd1.checked == true)
    window.location="../8_M/index.html";
    // else if (rd2.checked == true)
        // window.location="../page5/index.html";
}

// prevent for going backwards
function preventBack() { window.history.forward(); }  
setTimeout("preventBack()", 0);  
window.onunload = function () { null }; 

// calculate the correct answers.
let t_n = localStorage.getItem('t_times');
t_n = Number(t_n) + 1;
localStorage.setItem('t_times',t_n);