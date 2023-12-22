const HourElement = document.getElementById("hour");
const MinuteElement = document.getElementById("minutes");
const SecondElement = document.getElementById("seconds");
const TimeElement = document.getElementById("AM");

function UpdateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = "AM";

    if (h > 12) {
        h = h - 12;
        am = "PM";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    HourElement.innerHTML = h;
    MinuteElement.innerHTML = m;
    SecondElement.innerHTML = s;
    TimeElement.innerHTML = am;

    setTimeout(() => { UpdateClock(); }, 1000);
}

UpdateClock();
