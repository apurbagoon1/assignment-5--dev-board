// Random Background Color
const themeChange = document.getElementById('theme');

themeChange.addEventListener('click', function() {
    document.documentElement.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
});

// Live Day and Date
const liveDayDate = new Date();

const liveDay = document.getElementById("day");
liveDay.innerText = liveDayDate.toLocaleDateString("en-US", {weekday: "short"}) + " ,";

const liveDate = document.getElementById("date");
liveDate.innerText = liveDayDate.toLocaleDateString("en-US", {month: "short", day: "numeric", year: "numeric"});

// Task Left and Task Complete
const allButtons = document.getElementsByClassName('complete');
const leftTasks = document.getElementById('task-left');
const completeTasks = document.getElementById('task-completed');

for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener('click', function () {
        let leftTasksCount = parseInt(leftTasks.innerText);
        let completeTasksCount = parseInt(completeTasks.innerText);

        if (leftTasksCount > 0) {
            leftTasks.innerText = leftTasksCount - 1;
            completeTasks.innerText = completeTasksCount + 1;
        }

        allButtons[i].disabled = true;
        allButtons[i].classList.add('opacity-30');
        allButtons[i].classList.remove('cursor-pointer');
    });
}






