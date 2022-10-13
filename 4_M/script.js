// Used to log all actions of the user

function fn1(){
    var rd1 = document.getElementById("A");
    var rd2 = document.getElementById("B");
    if (rd1.checked == true){
        window.location="../4_T/index.html";
        // alert("Error!! There seems to be some problems with the system.");
    }
    else if (rd2.checked == true){
        window.location="../4_F/index.html";
        // alert("Error!! There seems to be some problems with the system.");
    }

    
}

function preventBack() { window.history.forward(); }  
setTimeout("preventBack()", 0);  
window.onunload = function () { null }; 