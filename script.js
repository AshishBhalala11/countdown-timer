const daysAppend = document.getElementById("days");
const hoursAppend  = document.getElementById("hours");
const minutesAppend  = document.getElementById("minutes");
const secondsAppend  = document.getElementById("seconds");

// newDateButton = document.getElementById("submit-button");
// date = document.getElementById("date-input");
// description = document.getElementById("event-description");


//let newYear = Date.parse(date.value);
let newYear = "1 jan 2022";

function countdownTime(){

    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    //const totalSecondsRemaining = (newYear - currentDate)/1000;
    const totalSecondsRemaining = (newYearDate - currentDate)/1000;

    const days = Math.floor(totalSecondsRemaining / (3600*24) );
    const hours = (Math.floor(totalSecondsRemaining / 3600 )) % 24;
    const minutes = (Math.floor(totalSecondsRemaining / 60 )) % 60;
    const seconds = (Math.floor(totalSecondsRemaining) % 60);

    if(daysAppend != null){
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