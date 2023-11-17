const taimer = document.querySelector('.block-time span');
const start = document.querySelector('#start');
const reset = document.querySelector('#reset');
let counter = 60;
let t;
let isRunning = false;

function startTaimer(){
    if (!isRunning) {
        isRunning = true;

    t = setInterval(()=>{
        if(counter >= 0){
            counter--;
            taimer.textContent = counter;  
        }
    else{
        clearInterval(t);
        isRunning = false;
    }
},1000)
}
}

function resetTaimer(){
    counter = 60;
    taimer.textContent = counter;
    clearInterval(t);
    isRunning = false;
}

start.addEventListener('click',startTaimer);
reset.addEventListener('click',resetTaimer);