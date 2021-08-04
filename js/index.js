let digitalClock = document.getElementById("digital-clock");

setInterval(() => {
    let dateObj = new Date();

    let timeString = dateObj.toLocaleTimeString();
    let dateString = dateObj.toLocaleDateString();
    // console.log(`${timeString} on ${dateString}`);
    digitalClock.innerHTML = timeString + ' on ' + dateString;
}, 1000);
