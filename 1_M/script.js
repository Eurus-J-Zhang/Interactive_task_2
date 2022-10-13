// Used to log all actions of the user
// window.onbeforeunload = function() { return "Your work will be lost."; };

// window.onhashchange = function() {
//     //blah blah blah
//     return "Your work will be lost."; 
//    }

function preventBack() { window.history.forward(); }  
setTimeout("preventBack()", 0);  
window.onunload = function () { null }; 

function fn1(){

    var rd1 = document.getElementById("A");
    var rd2 = document.getElementById("B");
    if (rd1.checked == true)
        window.location="../1_T/index.html";
    else if (rd2.checked == true)
        window.location="../1_F/index.html";
}


// const d = new Date();
// let time = d.getTime();
// let time1 = time - globalVariable.x
// document.getElementById("demo").innerHTML = time1;

