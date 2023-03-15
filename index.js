let arr = [[], [], []];
let chance = 1;
let stop = false;
let k = 1;

//extract buttons into array
for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        var m = k;
        k++;
        arr[i][j] = document.querySelector('#b'+m.toString());
    }

}

//check who wins 
function check(c){
    let i, j;
    for(i = 0; i < 3; i++){ //row wise
        for(j = 0; j < 3; j++){
            console.log(arr[i][j].innerHTML === c)
            if(arr[i][j].innerHTML != c)
                break;
        }
        if(j === 3)
            return true;
    }

    for(i = 0; i < 3; i++){ //col wise
        for(j = 0; j < 3; j++){
            if(arr[j][i].innerHTML != c)
                break;
        }
        if(j === 3)
            return true;
    }

    for(i = 0; i < 3; i++) //Diagonal wise
        if(arr[i][i].innerHTML != c)
            break;
    if(i === 3)     return true;

    for(i = 0; i < 3; i++) // opposite diagonal wise
        if(arr[i][2-i].innerHTML != c)
            break;
    if(i === 3)     return true;
    return false;
}

let handleEvent = function() {
    let temp_char;
    if(chance % 2 === 1){
        if(this.innerHTML === ''){
            this.innerHTML = 'X';
            temp_char = 'X'
            chance++;
        }
    }
    else{
        if(this.innerHTML === ''){
            this.innerHTML = 'Y';
            temp_char = 'Y';
            chance++;
        }
    }
    console.log(temp_char)
    if(check(temp_char) === true){
        var win = document.querySelector('.win');
        win.innerHTML = temp_char+'-WINS THE GAME';
        stop = true
    }
}


for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++){
        arr[i][j].addEventListener('click',handleEvent);
        if(stop === true)    break
    }
    if(stop === true)    break
}