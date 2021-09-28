const daysAppend = document.getElementById("days");
const hoursAppend  = document.getElementById("hours");
const minutesAppend  = document.getElementById("minutes");
const secondsAppend  = document.getElementById("seconds");

let eventName = document.getElementById("event-name");

let newYear = "1 jan 2022";

if(sessionStorage.getItem("date") ){
    let sessionDate = sessionStorage.getItem("date");
    newYear = sessionDate;

    let sessionDescription = JSON.parse(sessionStorage.getItem("description"));
    eventName.innerText = sessionDescription;
}

function countdownTime(){   

    if(daysAppend != null){

        const newYearDate = new Date(newYear);
        const currentDate = new Date();

        const totalSecondsRemaining = (newYearDate - currentDate)/1000;

        const days = Math.floor(totalSecondsRemaining / (3600*24) );
        const hours = (Math.floor(totalSecondsRemaining / 3600 )) % 24;
        const minutes = (Math.floor(totalSecondsRemaining / 60 )) % 60;
        const seconds = (Math.floor(totalSecondsRemaining) % 60);
    
        daysAppend.textContent = days;
        hoursAppend.textContent = formatTime(hours);
        minutesAppend.textContent = formatTime(minutes);
        secondsAppend.textContent = formatTime(seconds);
    
    }
    
}

function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

countdownTime();

setInterval(countdownTime , 1000);