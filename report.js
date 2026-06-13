let water =
localStorage.getItem("water") || 0;

let sleep =
localStorage.getItem("sleepHours") || 0;

let calories =
localStorage.getItem("calories") || 0;

let steps =
localStorage.getItem("steps") || 0;

let hygiene =
localStorage.getItem("hygieneScore") || 0;

let badge =
localStorage.getItem("badge") || "No Badge";

document.getElementById("reportWater")
.innerHTML = water + " / 8 Glasses";

document.getElementById("reportSleep")
.innerHTML = sleep + " Hours";

document.getElementById("reportCalories")
.innerHTML = calories;

document.getElementById("reportSteps")
.innerHTML = steps;

document.getElementById("reportHygiene")
.innerHTML = hygiene + "%";

document.getElementById("reportBadge")
.innerHTML = badge;


// Health Score

let waterScore =
Math.min((water / 8) * 25, 25);

let sleepScore =
Math.min((sleep / 8) * 25, 25);

let hygieneScore =
(hygiene / 100) * 25;

let stepScore =
Math.min((steps / 5000) * 25, 25);

let totalHealthScore =
Math.round(
waterScore +
sleepScore +
hygieneScore +
stepScore
);

document.getElementById("reportHealthScore")
.innerHTML =
totalHealthScore + "%";
localStorage.setItem("healthScore", totalHealthScore);
let today = new Date().toISOString().split("T")[0];

let history =
JSON.parse(localStorage.getItem("healthHistory")) || [];

if(totalHealthScore > 0){
    history.push({
        date: today,
        score: totalHealthScore
    });
}

localStorage.setItem(
    "healthHistory",
    JSON.stringify(history)
);