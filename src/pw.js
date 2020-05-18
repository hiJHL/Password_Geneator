
document.getElementById("submit").addEventListener("click", generatePW);

function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
}
function getRandomAlpha(){
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    return characters.charAt(Math.floor(Math.random() * characters.length));
}

function getRandomSpecial(){
    var characters = "~`!@#$%^&*()_+=-[]\;',./?><:{}|";
    return characters.charAt(Math.floor(Math.random() * characters.length));
}

function getRandom(intCB, alphaCB, specialCB){
    res = "";
    resInt = "";
    resAlpha = "";
    resSpecial = "";
    if(intCB){
        resInt = getRandomInt(9).toString();
    }
    if(alphaCB){
        resAlpha = getRandomAlpha().toString();
    }
    if(specialCB){
        resSpecial = getRandomSpecial().toString();
    }
    var chance = Math.random();
    if(chance < 0.3){
        if(intCB){
            return resInt;
        } else if(alphaCB){
            return resAlpha;
        } else{
            return resSpecial;
        }
    } else if(chance < 0.6){
        if(alphaCB){
            return resAlpha;
        } else if(specialCB){
            return resSpecial;
        } else {
            return resInt;
        }
    } else {
        if(specialCB){
            return resSpecial;
        } else if(intCB){
            return resInt;
        } else {
            return resAlpha;
        }
    }

}

function generatePW(){
    var intCB = document.getElementById("int").checked;
    var alphaCB = document.getElementById("alphabet").checked;
    var specialCB = document.getElementById("special").checked;
    var length = parseInt(document.getElementById("length").value, 10);
    var text = document.getElementById("result");
    var res = "";
    if(!intCB && !alphaCB && !specialCB){
        alert("Have to check at least 1 checkbox");
        return;
    }

    for(var i = 0; i < length; i++){
        res = res.concat(getRandom(intCB, alphaCB, specialCB));
    }

    text.value = res;


}
