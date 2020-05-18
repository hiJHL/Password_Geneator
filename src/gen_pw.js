// TODO: 
//var mongo = require('mongodb');

document.getElementById("copy").addEventListener("click", copyTOClickBoard);

function copyTOClickBoard(){
    var copyText = document.getElementById("result");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    // TRY TO DISPLAY A TEXT "COPIED" FOR 2 SEC
}  



// USE MONGODB TO STORE PASSWORD, EVERY NEWLY GENERATED PASSWORD SHOULD BE PUT ONTO MONGODB
// IF GENERATED PASSWORD IS ALREADY ON MONGODB, MEAING IT HAS ALREADY BEEN GENERATED
// GENERATE ANOTHER ONE. 