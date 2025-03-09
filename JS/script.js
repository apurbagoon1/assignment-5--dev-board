// Random Background Color
const themeChange = document.getElementById('theme');

themeChange.addEventListener('click', function () {
    document.documentElement.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
});

// Live Day and Date
const liveDayDate = new Date();

const liveDay = document.getElementById("day");
liveDay.innerText = liveDayDate.toLocaleDateString("en-US", {
    weekday: "short"
}) + " ,";

const liveDate = document.getElementById("date");
liveDate.innerText = liveDayDate.toLocaleDateString("en-US", {
    month: "short", day: "numeric", year: "numeric"
});

// Task Left, Task Complete and Display Tasks Complete Massege
const allButtons = document.getElementsByClassName('complete');
const leftTasks = document.getElementById('task-left');
const completeTasks = document.getElementById('task-completed');

let tasksCompletion = 0;
let totalTasks = document.getElementsByClassName('complete').length;

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

        let taskTitles = document.getElementsByClassName('task-title');
        let taskTitle = taskTitles[i].innerText;

        let liveTime = new Date().toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        });

        let displayMessage = `You have Completed the Task "${taskTitle}" at ${liveTime}`;

        let activityLog = document.getElementById("activity-log");

        let activityLogMasseges = document.createElement('p');
        activityLogMasseges.textContent = displayMessage;
        activityLogMasseges.style.marginBottom = '20px';
        activityLog.appendChild(activityLogMasseges);

        tasksCompletion++;

        alert(`Task "${taskTitle}" has been successfully completed!`);

        if (tasksCompletion === totalTasks) {
            alert('All Tasks are Successfully Submitted!');
        }
    });
};

// Clear Activity Log
const activityLog = document.getElementById("activity-log");
const clearHistory = document.getElementById("clear-history");
clearHistory.addEventListener("click", function () {
    activityLog.textContent = " ";
});

// Discover Something New
const discoverSomethingNew = document.getElementById("discover");
discoverSomethingNew.addEventListener("click", function () {
    window.location.href = "blog.html";
});











