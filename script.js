"use strict"

let hour = 0;
let minute = 0;
let seconds = 0;

let time = 1000;
let cron;

let btn_start = document.getElementById("start")
let btn_pause = document.getElementById("pause")
let btn_stop = document.getElementById("stop")

const start = () =>{
    cron = setInterval(() => {
        timer();}, time)
       
    
    btn_start.style = "display: none";   
    btn_pause.style = "display: inline";   
    btn_stop.style = "display:  inline";   
    
}

const pause = () => {
    clearInterval(cron);

    btn_pause.style = "display: none";   
    btn_start.style = "display: inline";   
    btn_stop.style = "display:  inline";  


}

const stop = () => {
    clearInterval(cron);
    hour = 0;
    minute = 0;
    seconds = 0;
    
    
    btn_stop.style = "display:  none";  
    btn_pause.style = "display: none";   
    btn_start.style = "display: inline";   

    document.getElementById('counter').innerText = '00 : 00 : 00';
    
}

const timer = () => {
    
    seconds++;
    
    if(seconds == 60){
        ss = 0;
        minute++;
    }

    if(minute == 60){
        minute = 0;
        hour++;
    }

    if(hour == 60){
        hour = 0;
        minute = 0;
        seconds++;
    }





    let format = (hour < 10 ? '0' + hour : hour) + ' : '
                  + (minute < 10 ? '0' + minute : minute) + ' : '
                     + (seconds < 10? '0' + seconds : seconds);


    document.getElementById('counter').innerText = format;
}