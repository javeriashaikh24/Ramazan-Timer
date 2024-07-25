

var countdownDate = moment("2025-12-31T23:59:59");

function updateCountdown() {
    var now = moment();
    var duration = moment.duration(countdownDate.diff(now));

  
    var days = Math.floor(duration.asDays());
    var hours = duration.hours();
    var minutes = duration.minutes();
    var seconds = duration.seconds();

    
    document.getElementById('days').textContent = formatTimeValue(days);
    document.getElementById('hours').textContent = formatTimeValue(hours);
    document.getElementById('minutes').textContent = formatTimeValue(minutes);
    document.getElementById('seconds').textContent = formatTimeValue(seconds);
}


function formatTimeValue(timeValue) {
    return timeValue < 10 ? "0" + timeValue : timeValue;
}


setInterval(updateCountdown, 1000);

updateCountdown();