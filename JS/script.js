// Random Background Color
const themeChange = document.getElementById('theme');

themeChange.addEventListener('click', function () {
    document.documentElement.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
});

// Live Day and Date
const liveDayDate = new Date();

const liveDay = document.getElementById("day");
liveDay.innerText = liveDayDate.toLocaleDateString("en-US", {weekday: "short"}) + " ,";

const liveDate = document.getElementById("date");
liveDate.innerText = liveDayDate.toLocaleDateString("en-US", {month: "short", day: "numeric", year: "numeric"});




