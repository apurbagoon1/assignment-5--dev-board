// Live Day and Date
const liveDate = new Date();

document.getElementById("day").innerText = liveDate.toLocaleDateString("en-US", {weekday: "short"}) + " ,";

document.getElementById("date").innerText = liveDate.toLocaleDateString("en-US", {month: "short", day: "numeric", year: "numeric"});