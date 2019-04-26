let wakeuptime = 8;
const noon = 12;
let lunchtime = 12;
let naptime = lunchtime + 3;
let partytime;
const evening = 18;

//Show actual time on the page 

var showCurrentTime = function() {
    let clock = document.getElementById('clock');
    let currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();
    let meridian = "AM";
    //Set hours
    if (hours >= noon) {
        meridian = "PM";
    }
    if (hours > noon) {
        hours = hours - 12;
    }
    //Set minutes
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    //Set seconds
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    const clockTime = hours + ':' + minutes + ':' + seconds + '' + meridian + '!';
    clock.innerText = clockTime;
};


// Getting the clock to change time on its own and change messages and pictures

var updateClock = function() {
    let time = new Date().getHours();
    let messageText;
    let image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

    let timeEvent = document.getElementById('timeEvent');
    let catImage = document.getElementById('lolcatImage');

    if (time == partytime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
        messageText = 'Party time !';
    } else if (time == wakeuptime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
        messageText = "Wake up!";
    } else if (time == lunchtime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
        messageText = "Let's have some lunch!";
    } else if (time == naptime) {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
        messageText = "Sleep tight!";
    } else if (time < noon) {
        image = "https://pbs.twimg.com/profile_images/378800000532546226/dbe5f0727b69487016ffd67a6689e75a.jpeg";
        messageText = "Good morning!";
    } else if (time >= evening) {
        image = "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cat_sleep.jpg";
        messageText = "Good evening!";
    } else {
        image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";
        messageText = "Good afternoon!";
    }

    console.log(messageText);
    timeEvent.innerText = messageText;
    catImage.src = image;

    showCurrentTime();
};
updateClock();

//Clock will rise every second

const oneSecond = 1000;
setInterval(updateClock, oneSecond);

//Party time button

const partyButton = document.getElementById('partyTimeButton');
var partyEvent = function() {
    if (partytime < 0) {
        partytime = new Date().getHours();
        partyTimeButton.innerText = "Party Over!";
        partyTimeButton.style.backgroundColor = "#0A8DAB";
    } else {
        partytime = -1;
        partyTimeButton.innerText = "Party Time!";
        partyTimeButton.style.backgroundColor = "#222";
    }
};

partyButton.addEventListener('click', partyEvent);
partyEvent();

//Wake-up selector

let wakeUpTimeSelector = document.getElementById('wakeUpTimeSelector');
var wakeUpEvent = function() {
    wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener('change', wakeUpEvent);

//Lunch selector 

let lunchTimeSelector = document.getElementById('lunchTimeSelector');

var lunchEvent = function() {
    lunchtime = lunchTimeSelector.value;
}

lunchTimeSelector.addEventListener('change', lunchEvent);

//Nap-time selector

let napTimeSelector = document.getElementById('napTimeSelector');

var napEvent = function() {
    naptime = napTimeSelector.value;
}

napTimeSelector.addEventListener('change', napEvent);
